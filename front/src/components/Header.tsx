import { Grid } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function Header() { 
    const {currentAddress} = useContext(AuthContext);
    
    return (
      <>    
      <Grid container>
        <Grid item md={12}>
          <h3>{currentAddress}</h3>
        </Grid>
      </Grid>
      </>
    )
  }
  
  export default Header;
  
  