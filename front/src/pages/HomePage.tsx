import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() { 
  const { isAuthenticated,connectWallet } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    connectWallet();
  },[]);

  useEffect(()=>{
    if(isAuthenticated){
        navigate("/main");
    }
  },[isAuthenticated]);

  return (
    <>    
    <button onClick={()=>connectWallet()}>CONECT WALLET</button>
    </>
  )
}

export default HomePage

