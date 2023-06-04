import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImgMediaCard from "./CardMedia.jsx";
import NavBar from './NavBar.jsx';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1,maxWidth:1100,margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5 }}>
      {/*<picture>*/}
      {/*    <source media="(max-width: 678px)"  srcSet='./../../../visual/promocoes/promocoes5_gorda.png'/>*/}
      {/*    <img id="promo_img" src="./../../../visual/promocoes/promocoes5.webp" alt="Promocao do Dia" />*/}
      {/*</picture>*/}
      <Grid container spacing={2}>
          {Object.keys(images_autoajuda).map((item) =>(
              <Grid item xs={3} key={item}>
                <ImgMediaCard src={item} alt={item.split('/')[6]}/>
              </Grid>
          ))}
          {Object.keys(images_aventura).map((item) =>(
              <Grid item xs={3} key={item}>
                <ImgMediaCard src={item} alt={item.split('/')[6]}/>
              </Grid>
          ))}
          {Object.keys(images_literatura).map((item) =>(
              <Grid item xs={3} key={item}>
                <ImgMediaCard src={item} alt={item.split('/')[6]}/>
              </Grid>
          ))}
          {Object.keys(images_romance).map((item) =>(
              <Grid item xs={3} key={item}>
                <ImgMediaCard src={item} alt={item.split('/')[6]}/>
              </Grid>
          ))}
          {Object.keys(images_suspense).map((item) =>(
              <Grid item xs={3} key={item}>
                <ImgMediaCard src={item} alt={item.split('/')[6]}/>
              </Grid>
          ))}
      </Grid>
    </Box>
  );
}

const images_autoajuda = import.meta.glob("./../../../visual/livros/autoajuda/*.jpg");
const images_aventura = import.meta.glob("./../../../visual/livros/aventura/*.jpg");
const images_literatura = import.meta.glob("./../../../visual/livros/literatura/*.jpg");
const images_romance = import.meta.glob("./../../../visual/livros/romance/*.jpg");
const images_suspense = import.meta.glob("./../../../visual/livros/suspense/*.jpg");


const Livros = [
  {
    img:'./../../../visual/livros/autoajuda/a_coragem_de_ser_imperfeito.jpg',
    title: "A coragem de ser imperfeito"
  },
  {
    img: './../../../visual/livros/autoajuda/a_sindrome_da_boazinha.jpg',
    title: 'A sindrome da boazinha',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];