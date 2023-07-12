import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import {Link,useParams,useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from "./../hooks/useLocalStorage";
import useAuth from '../hooks/useAutentication';
import axios from 'axios';

const BtComprar = styled(Button)({
    marginTop:'15px',
    width:"100%",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#4292bf',
    borderColor: '#0063cc',
    color:"black",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0f2c4b',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color:"white",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


const BookPage = (props) =>{
    const navigate = useNavigate();
    const location = useLocation();
    const {signed} = useAuth();
    const book = location.state.book;
    const [qtd, setQtd] = useState(1);
    const txtPath = location.state.link.split(".jpg")[0] + ".txt"
    const name = location.state.nome.split(" ");
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].substr(1);
    }

    const preco = location.state.preco
    const [text,setText] = useState("");
    axios.get(`http://localhost:4242/api/products/${book._id}`).then(res => setText(book.descricao))
    fetch(txtPath)
    .then(r => r.text())
    .then(text => {
        setText(text);
    });

    // Função que ira atribur o livro ao carrinho
    const clickHandlerCart = () => {
        debugger;
        let cart = localStorage.getItem('myCart');
        cart = JSON.parse(cart);
        if (cart == null) {
            cart = [];
        }
        const i = cart.findIndex(book => book.nome === location.state.nome);
        if (i > -1) {
            const qtd_final = Number(cart[i].qtd) + Number(qtd);
            if (qtd_final > location.state.estoque) {
                cart[i].qtd = location.state.estoque;
            }
            else{
                cart[i].qtd = qtd_final;
            }
        }
        else{
            const book ={
                _id:location.state.book._id,
                nome: location.state.nome,
                link:location.state.link,
                preco: location.state.preco,
                qtd: qtd,
                estoque:location.state.estoque,
            }
            cart.push(book);
        }
        localStorage.setItem("myCart",JSON.stringify(cart));
        console.log(cart)
    };

    const handleQtd = (qtd) => {
        if (qtd > location.state.estoque) {
            setQtd(location.state.estoque)
        }
        if (qtd < 1) {
            setQtd(1);
        }
        else{
            setQtd(qtd);
        }
    }

    // Função que ira atribur o livro ao carrinho e levar ao checkout
    const clickHandlerCheckout = () => {
        clickHandlerCart()
        if (!signed) {
            navigate("/login")
        }else{
            navigate("/carrinho")
        }
    };

    return(
        
        <Box sx={{ flexGrow: 1,maxWidth:850,margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                  <img style={{maxWidth:"350px"}} src={location.state.link}/>
              </Grid>
              <Grid item xs={6} md={6}>
                  <Typography sx={{fontWeight: 'bold',textAlign:"center",marginBottom:"10px"}} variant='h5'>
                    {name.join(" ")}
                  </Typography>
                  <Typography sx={{textAlign: 'justify',marginBottom:"5px"}} variant="body2" color="text.primary">
                     {text}
                  </Typography>
                  <hr size="1"></hr>
                  <Typography sx={{textAlign: 'justify',marginTop:"5px"}} variant="body2" color="grey">
                     Em estoque: {location.state.estoque}
                  </Typography>
                  <Grid container spacing={2} sx={{marginTop:2}}>
                    <Grid item xs={6} md={8} sx={{display:"flex",alignItems:"center"}}>
                        <Typography sx={{fontWeight: 'bold'}} variant='h5'>
                            R$ {preco}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <TextField
                            id="outlined-basic"
                            label="Quantidade"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                                // style:{textAlign:"center"}
                            }}
                            InputProps={{
                                inputProps:{min:1,max:Number(location.state.estoque)}
                            }}
                            onChange={e => handleQtd(e.target.value)}
                            value={qtd}
                        />
                    </Grid>
                  </Grid>
                  <BtComprar size="large" onClick={clickHandlerCart} disabled={location.state.estoque < 1}>Adicionar ao Carrinho</BtComprar>
                  <BtComprar size="large" onClick={clickHandlerCheckout} disabled={location.state.estoque < 1}>Comprar</BtComprar>
              </Grid>
            </Grid>
        </Box>
    )
}

export default BookPage;