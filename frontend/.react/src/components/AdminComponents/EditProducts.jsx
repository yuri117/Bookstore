import * as React from 'react';
import ProductCard from './ProductCard';
import {useEffect } from "react";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ImgMediaCard from '../CardMedia';



export default function EditProducts() {
  const [books, setbooks] = React.useState([]);

  useEffect(()=>{
    fetch('http://localhost:4242/api/products',{
      method:"GET",
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res =>{ 
        setbooks(res)
      })
      .catch(error => console.log("error",error))
  },[]);

  return (
    <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
        {books.map((item) =>(
              <Grid item xs={6} key={item.nome} sx={{minWidth:220}}>
                <ProductCard _id={item._id}/>
              </Grid>
          ))}
      </Grid>
  );
}