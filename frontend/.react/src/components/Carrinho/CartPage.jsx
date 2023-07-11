import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import CartProduct from './ProductCart';


export default function CartPage() {
    const navigate = useNavigate()
  let cart = localStorage.getItem('myCart');
  cart = JSON.parse(cart);

  const handleQtd = (qtd,item) => {
    debugger;
    const i = cart.findIndex(book => book.nome === item.nome);
    if (i > -1) {
        if (qtd > Number(item.estoque)) {
            cart[i].qtd = Number(item.estoque);
        }
        else if (qtd < 1) {
            cart[i].qtd = 1;
        }
        else{
            cart[i].qtd = Number(qtd);
        }
        localStorage.setItem("myCart",JSON.stringify(cart));
    }
}

const clickDelete = (item) => {
    debugger;
    const i = cart.findIndex(book => book.nome === item.nome);
    cart.splice(i,1);
    localStorage.setItem("myCart",JSON.stringify(cart));
    window.location.reload(false);
}


  function RenderCart() {
    if (cart === null || cart.length === 0) {
        return (
            <Grid item xs={4} sx={{textAlign:"center"}}>
                <Typography component="div" variant="h5">
                Não há livros no carrinho!
                </Typography>
                <Button variant="contained" onClick={e => navigate('/') } sx={{marginTop:"5px"}} fullWidth>Comprar</Button>
            </Grid>
            
            )
    }
    else{
        return(
            cart.map((item) =>(
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
                        <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center",paddingRight:2 }} fullWidth>
                            <TextField
                                id="outlined-basic"
                                label="Quantidade"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                    // style:{textAlign:"center"}
                                }}
                                InputProps={{
                                    inputProps:{min:1}
                                }}
                                onChange={e => handleQtd(e.target.value,item)}
                                defaultValue={item.qtd}
                            />
                            <Button variant="contained" onClick={()=>clickDelete(item)} sx={{marginTop:"5px"}} color="error">Deletar</Button>
                        </Box>
                    </Card>
                </Grid>
            ))
        )
    }
    
  }

  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column",justifyContent:"center" }}>
      <Typography component="div" variant="h4">
                Meu Carrinho
                </Typography>
      <Grid container spacing={2} sx={{width:"80%",margin:"auto", display:"flex",justifyContent:"center"}}>
            <RenderCart/>
            {cart &&(
                <Button variant="contained" onClick={()=>navigate("/checkout")} sx={{marginTop:"5px"}}>Finalizar Compra</Button>
            )}
      </Grid>
    </Box>
  );
}
