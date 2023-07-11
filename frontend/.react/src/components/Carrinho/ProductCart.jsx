import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function CartProduct({cart}) {

    const handleQtd = (qtd,item) => {
        const i = cart.findIndex(book => book.nome === item.nome);
        if (i > -1) {
            if (qtd > item.estoque) {
                cart[i].qtd = item.estoque;
            }
            if (qtd < 1) {
                cart[i].qtd = 1;
            }
            else{
                cart[i].qtd = Number(qtd);
            }
        }
    }

    const clickDelete = (item) => {
        const i = cart.findIndex(book => book.nome === item.nome);
        cart.slice(i,1);
    }

    cart.map((item) =>(
        <Grid item xs={12} key={item.nome}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 125 }}
                    image={"./."+item.link}
                    alt={item.nome}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ display: "flex",flex: "1 0 auto",flexDirection:"column",justifyContent:"space-around" }}>
                    <Typography component="div" variant="h5">
                        {item.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        R$ {item.preco}
                    </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center" }}>
                    <TextField
                            id="outlined-basic"
                            label="Quantidade"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                                // style:{textAlign:"center"}
                            }}
                            InputProps={{
                                inputProps:{min:1,max:Number(item.estoque)}
                            }}
                            onChange={e => handleQtd(e.target.value,item)}
                            defaultValue={item.qtd}
                        />
                    <Button variant="contained" onClick={clickDelete(item)} sx={{marginTop:"5px"}} color="error">Deletar</Button>
                </Box>
            </Card>
        </Grid>
    ))
}