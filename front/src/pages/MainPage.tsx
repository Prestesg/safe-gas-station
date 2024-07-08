import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Divider from '@mui/material/Divider';
import WalletIcon from '@mui/icons-material/Wallet';
import { useContext } from "react";
import ContractContext from "../contexts/ContractContext";
import GasMeterIcon from '@mui/icons-material/GasMeter';
import SendIcon from '@mui/icons-material/Send';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function MainPage() { 
    const { approveInsurancePurchase,purchaseGasInsurence } = useContext(ContractContext);

    return (
      <>    
      <Grid container>
        <Grid item md={4} sx={{border:"black 10px solid"}}>
          <h2>MVC SAFE GAS STATION POC 1</h2>
          <p>Objetivo: Enviar algum valor em ether para o usuário usar de gás para transferencia </p>
          <Divider/>
          <h3>ETAPA 1 </h3>
          <p>O usuário deve realizar a compra do seguro gás</p>
          <h4>Passo 1</h4>
          <Button variant="contained" endIcon={<WalletIcon />} onClick={()=>approveInsurancePurchase()}>
            Liberar uso de saldo 
          </Button>
          <h4>Passo 2</h4>
          <Button variant="contained" endIcon={<AttachMoneyIcon />} onClick={()=>purchaseGasInsurence()} >
            Comprar seguro
          </Button>
          <p>Transação 1 : Da o approve do uso de USDC da carteira do usuário pelo contrato no valor do preço do seguro</p>
          <p>Transação 2 : Realiza a compra do seguro gás na plaforma</p>
          <Divider/>
          <h3>ETAPA 2</h3>
          <p>Se o usuário comprou o seguro gás e ficou sem gás </p>
          <h4>Passo 1</h4>
          <p>O usuário pede para a plataforma enviar uma pequena quantidade de ether</p>  
          <Button variant="contained" endIcon={<GasMeterIcon />} onClick={()=>purchaseGasInsurence()}>
            Obter gás
          </Button>
        </Grid>
        <Grid item md={4} sx={{border:"blue 10px solid"}}>
          <h3>MVC SAFE GAS STATION POC 2</h3>
          <p>Realiza uma operação de transferencia pro usuário</p>
          <Divider/>
          <h3>ETAPA 1 </h3>
          <p>O usuário deve realizar a compra do seguro gás</p>
          <h4>Passo 1</h4>
          <Button variant="contained" endIcon={<WalletIcon />} onClick={()=>approveInsurancePurchase()}>
            Liberar uso de saldo 
          </Button>
          <h4>Passo 2</h4>
          <Button variant="contained" endIcon={<AttachMoneyIcon />} onClick={()=>purchaseGasInsurence()} >
            Comprar seguro
          </Button>
          <Divider/>
          <h3>ETAPA 2</h3>
          <p>Se o usuário comprou o seguro gás e ficou sem gás </p>
          <h4>Passo 1</h4>
          <p>O usuário coloca para qual carteira e a quantidade de tokens que ele quer transferir</p>  
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Wallet Destino</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Endereço"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Quantidade de Tokens</InputLabel>
            <OutlinedInput
              type={"number"}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Amount"
            />
          </FormControl>
          <Button variant="contained" endIcon={<GasMeterIcon />} onClick={()=>purchaseGasInsurence()} disabled>
            Obter gás para aprovação
          </Button>
          <p>Transação 1: (Back-end) Contrato envia para a wallet do usuário gás suficiente para aprovar o uso do saldo de tokens que le quer transferir</p>
          <Button variant="contained" endIcon={<SendIcon />} onClick={()=>purchaseGasInsurence()} disabled>
            Enviar 
          </Button>
          <p>Transação 2: (Back-end) Contrato realiza a operação de transferencia de tokens para o usuário </p>
        </Grid>
        <Grid item md={4} sx={{border:"green 10px solid"}}>
          <h3>MVC SAFE GAS STATION POC 3</h3>
          <p>Realiza uma operação de transferencia ou swap para o usuário</p>
          <Divider/>
          <h3>ETAPA 1 </h3>
          <p>O usuário deve realizar a compra do seguro gás</p>
          <h4>Passo 1</h4>
          <Button variant="contained" endIcon={<WalletIcon />} onClick={()=>approveInsurancePurchase()}>
            Liberar uso de saldo 
          </Button>
          <h4>Passo 2</h4>
          <Button variant="contained" endIcon={<AttachMoneyIcon />} onClick={()=>purchaseGasInsurence()} >
            Comprar seguro
          </Button>
          <Divider/>
          <h3>ETAPA 2</h3>
          <p>Se o usuário comprou o seguro gás e ficou sem gás </p>
          <h4>Passo 1</h4>
          <p>O usuário coloca para qual carteira, qual token e a quantidade de tokens que ele quer transferir</p>  
          <FormControl sx={{ m: 1, minWidth: 300 }} >
      <InputLabel id="demo-select-small-label">Escolha o token que quer transferir</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={"matic"}
          label="Escolha o token que quer transferir"
          onChange={()=>true}
        >
          <MenuItem value={"matic"}>MATIC</MenuItem>
          <MenuItem value={"usdc"}>USDC</MenuItem>
          <MenuItem value={"bnb"}>BNB</MenuItem>
        </Select>
      </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Wallet Destino</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Endereço"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Quantidade de Tokens</InputLabel>
            <OutlinedInput
              type={"number"}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Amount"
            />
          </FormControl>
          <Divider />
          
          <FormControl sx={{ m: 1, minWidth: 300 }} >
      <InputLabel id="demo-select-small-label">Escolha o token que você quer receber</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={"matic"}
          label="Escolha o token que quer transferir"
          onChange={()=>true}
        >
          <MenuItem value={"matic"}>MATIC</MenuItem>
          <MenuItem value={"usdc"}>USDC</MenuItem>
          <MenuItem value={"bnb"}>BNB</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <Button variant="contained" endIcon={<GasMeterIcon />} onClick={()=>purchaseGasInsurence()} disabled>
            Obter gás para aprovação
          </Button>
          <p>Transação 1: (Back-end) Contrato envia para a wallet do usuário gás suficiente para aprovar o uso do saldo de tokens que le quer transferir</p>
          <Button variant="contained" endIcon={<SendIcon />} onClick={()=>purchaseGasInsurence()} disabled>
            Enviar 
          </Button>
          <p>Transação 2: (Back-end) Contrato realiza a operação de transferencia de tokens para o usuário </p>
        </Grid>
      </Grid>
      </>
    )
  }
  
  export default MainPage;
  
  