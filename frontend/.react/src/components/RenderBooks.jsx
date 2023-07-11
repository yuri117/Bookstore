import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImgMediaCard from "./CardMedia.jsx";

export default function RenderBooks({books}) {
  return (
    <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
        {books.map((item) =>(
              <Grid item xs={3} key={item.nome} sx={{minWidth:220}}>
                <ImgMediaCard book={item}/>
              </Grid>
          ))}
      </Grid>
  );
}