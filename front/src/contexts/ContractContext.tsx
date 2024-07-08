import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { OP_SAFE_GAS_STATION_CONTRACT_ADRESS, OP_USDC_CONTRACT_ADRESS } from '../constants/contractAdresses';
import { SGS_ABI } from '../constants/SafeGasStationContractAbi';
import { INSURENCE_CONTRACT_PRICE } from '../constants/rules';
import { ERC20Abi } from '../constants/ERC20AbiInterface';

export const ContractContext = createContext({
    paymentContract: {},
    safeGasStationContract:{},
    approveInsurancePurchase:()=>{return},
    purchaseGasInsurence:()=>{return}
});

export const ContractContextProvider = ({children}:any) => {
    const [ paymentContract, setPaymentContract ] = useState<any>(false);
    const { provider,signer } = useContext(AuthContext);
    const safeGasStationContract:any = new ethers.Contract(OP_SAFE_GAS_STATION_CONTRACT_ADRESS, SGS_ABI, provider);

    useEffect(()=>{
        // Criar uma instância do contrato usando o endereço e o ABI
        const contract = new ethers.Contract(OP_USDC_CONTRACT_ADRESS, ERC20Abi, provider);
        setPaymentContract(contract)
    },[]);

    const approveInsurancePurchase = async () => {
        try {
            const result = await paymentContract.connect(signer).approve(OP_SAFE_GAS_STATION_CONTRACT_ADRESS, INSURENCE_CONTRACT_PRICE) ;
            console.log('Resultado da chamada do método:', result);
        } catch (error) {
            console.error('Erro ao chamar o método do contrato:', error);
        }
    }

    const purchaseGasInsurence = async () => {
        console.log({safeGasStationContract,OP_SAFE_GAS_STATION_CONTRACT_ADRESS,INSURENCE_CONTRACT_PRICE})
        try {
            const result = await safeGasStationContract.connect(signer).purchaseSafeGas() ;
            console.log('Resultado da chamada do método:', result);
        } catch (error) {
            console.error('Erro ao chamar o método do contrato:', error);
        }
    }

    return (
        <ContractContext.Provider value={{ paymentContract, safeGasStationContract,approveInsurancePurchase,purchaseGasInsurence}}>
            {children}
        </ContractContext.Provider>
    );
}; 

export default ContractContext;