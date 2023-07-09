import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState,useEffect } from 'react';


export default function Review({pnome,snome,rua,bairro,CEP,estado,cidade,nomeCartao,numCartao}) {
  let cart = localStorage.getItem('myCart');
  cart = JSON.parse(cart);
  const [totalF,setTotalF] = React.useState(0);

  useEffect(()=>{
    let total = 0;
        for (let index = 0; index < cart.length; index++) {
            total = total + Number(cart[index].qtd) * Number(cart[index].preco)
        }
        setTotalF(total);
        
  })


  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column" }}>
      
      <Grid container spacing={2} sx={{width:"80%",margin:"auto"}}>
        <Grid item xs={12} md={12}>
            {cart.map((item) =>(
                <Grid item xs={10} key={item.nome}>
                    <Card sx={{ display: 'flex',justifyContent:"space-between"}}>
                        <Box sx={{ display: 'flex'}}>
                            <CardMedia
                                component="img"
                                sx={{ width: 125 }}
                                image={"./."+item.link}
                                alt={item.nome}
                            />
                            <CardContent sx={{ display: "flex",flex: "1 0 auto",flexDirection:"column",justifyContent:"space-around" }}>
                            <Typography component="div" variant="h5">
                                {item.nome}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                R$ {item.preco}
                            </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center",paddingRight:2,textAlign:"center" }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Quantidade: {item.qtd}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Total: R$ {(Number(item.qtd) * Number(item.preco)).toFixed(2)}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            ))}
            <Typography component="div" variant="h6">
                Total da Compra: R$ {(totalF).toFixed(2)}
            </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
            <Typography sx={{fontWeight: 'bold',marginBottom:"10px"}} variant='h5'>
                Endereço de Entrega
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                Rua: {rua}
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                Bairro: {bairro},{CEP}
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                {cidade},{estado}
            </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
            <Typography sx={{marginBottom:"10px"}} variant='h5'>
                Forma de Pagamento
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                Cartão de crédito
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                Titular: {nomeCartao}
            </Typography>
            <Typography sx={{marginBottom:"5px"}} variant='body1'>
                Numero: xxxx-xxxx-xxxx-{numCartao.slice(-4)}
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
