import { ethers } from "ethers";
import { SGS_CONTRACT } from "src/constants/contractsAdress";
import { SGSAbi } from "src/docker/foundry/SGSAbi";

// Crie uma instância do provedor Ethereum
const provider = new ethers.JsonRpcProvider("https://optimism-sepolia.blockpi.network/v1/rpc/public");

// Crie uma instância do contrato usando o endereço do contrato e a ABI
const contract = new ethers.Contract(SGS_CONTRACT, SGSAbi, provider);

// Chame uma função do contrato
async function callContractFunction() {
    try {
        // Chame a função desejada do contrato
        const result = await contract.someFunction();

        // Faça algo com o resultado
        console.log("Resultado da função:", result);
    } catch (error) {
        console.error("Erro ao chamar a função do contrato:", error);
    }
}