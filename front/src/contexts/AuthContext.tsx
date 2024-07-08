import { ethers,JsonRpcSigner,AbstractProvider } from 'ethers';
import { createContext, useState } from 'react';
let teste:any;
export const AuthContext = createContext({
    isAuthenticated: false,
    currentAddress: "", 
    provider: teste,
    signer:teste,
    connectWallet: ()=> { return }
});

export const AuthContextProvider = ({children}:any) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ provider, setProvider ] = useState<AbstractProvider>(ethers.getDefaultProvider());
    const [ signer, setSigner ] = useState<JsonRpcSigner|any>();
    const [ currentAddress,  setCurrentAddress ] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
            const currentProvider = new ethers.BrowserProvider(window.ethereum)
            const signer = await currentProvider.getSigner();
            if(signer){
                setIsAuthenticated(true);
                setSigner(signer);
                setProvider(currentProvider);
                setCurrentAddress(signer.address);
            } else {
                setIsAuthenticated(false);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated,currentAddress,provider,signer,connectWallet }}>
            {children}
        </AuthContext.Provider>
    );
}; 

export default AuthContext;