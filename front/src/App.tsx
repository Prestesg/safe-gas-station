import './App.css';
import { AuthContextProvider } from './contexts/AuthContext';
import { ContractContextProvider } from './contexts/ContractContext';
import MainRoutes from './routes/MainRoutes';

declare global {
  interface Window { ethereum: any; }
}

function App() {

  return (
    <>
      <AuthContextProvider>
        <ContractContextProvider>
          <MainRoutes />
        </ContractContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
