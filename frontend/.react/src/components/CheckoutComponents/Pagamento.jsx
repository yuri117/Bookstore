import React from 'react';
import { TextField, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function Pagamento({nomeCartao,numCartao,cpfTitular,dataVenc,cvv,nextStep,change}){

  const [error,setError] = useState("");
  const clickHandler = (e) => {
    if (nomeCartao === "" || numCartao === "" || cpfTitular === "" || dataVenc === "" || cvv === "") {
      setError("Preencha todos os campos!")
      return
    }
    nextStep()
  }

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2} sx={{width:"80%",margin:"auto"}}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nome Impresso no Cartão" variant="outlined" value={nomeCartao} onChange={change('nomeCartao')} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Numero do Cartão" variant="outlined" value={numCartao} onChange={change('numCartao')} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Validade" type='date' value={dataVenc} onChange={change('dataVenc')} fullWidth InputLabelProps={{ shrink: true }}/>
        </Grid>
        <Grid item xs={4}>
          <TextField label="CVV" variant="outlined" value={cvv} onChange={change('cvv')} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="CPF do Titular" variant="outlined" value={cpfTitular} onChange={change('cpfTitular')} fullWidth />
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