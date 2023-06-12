import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImgMediaCard from "./CardMedia.jsx";

export default function RenderBooks({books}) {
  return (
    <Grid container spacing={2}>
        {books.map((item) =>(
              <Grid item xs={3} key={item.nome}>
                <ImgMediaCard arq={item.nome_arquivo} nome={item.nome} tipo={item.categoria} preco ={item.preco} estoque ={item.estoque}/>
              </Grid>
          ))}
      </Grid>
  );
}