import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Review({pnome,snome,rua,bairro,CEP,estado,cidade,nomeCartao,numCartao}) {
  let cart = localStorage.getItem('myCart');
  cart = JSON.parse(cart);



  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column" }}>
      
      <Grid container spacing={2} sx={{width:"80%",margin:"auto"}}>
        <Grid item xs={12} md={12}>
            {cart.map((item) =>(
                <Grid item xs={12} key={item.nome}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 125 }}
                            image={"./."+JSON.parse(item).link}
                            alt={item.nome}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {JSON.parse(item).nome}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                R$ {Number(JSON.parse(item).preco)*Number(JSON.parse(item).qtd)}
                            </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
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
