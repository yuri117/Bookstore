import React from 'react';
import { TextField, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function Endereco({pnome,snome,rua,bairro,CEP,estado,cidade,nextStep,change}){
  
  const [error,setError] = useState("");
  const clickHandler = (e) => {
    if (pnome === "" || snome === "" || rua === "" || bairro === "" || CEP === "" || estado === "" || cidade === "") {
      setError("Preencha todos os campos!")
      return
    }
    nextStep()
  }


  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2} sx={{width:"80%",margin:"auto"}}>
        <Grid item xs={12} sm={6}>
          <TextField label="Primeiro Nome" variant="outlined" value={pnome} onChange={change('pnome')} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Último Nome" variant="outlined" value={snome} onChange={change('snome')}  fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Rua" variant="outlined" value={rua} onChange={change('rua')}  fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Bairro" variant="outlined" value={bairro} onChange={change('bairro')}  fullWidth />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField label="CEP" variant="outlined" value={CEP} onChange={change('CEP')}  fullWidth />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField label="Cidade" variant="outlined" value={cidade} onChange={change('cidade')}  fullWidth />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField label="Estado" variant="outlined" value={estado} onChange={change('estado')}  fullWidth />
        </Grid>
      </Grid>
      <div style={{display:"flex",justifyContent:"center",width:"80%",margin:"auto",marginTop:8}}>
        {error && (
          <Alert onClose={() =>setError("")}severity="error">{error}</Alert>
        )}
        <Button variant="contained" onClick={clickHandler} sx={{alignContent:"center"}}>Próximo</Button>
      </div>
    </form>
  );
};