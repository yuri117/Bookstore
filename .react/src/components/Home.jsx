import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImgMediaCard from "./CardMedia.jsx";
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RenderBooks from './RenderBooks.jsx';

export default function Home() {
  const [books,setBooks] = useState([]);
  const [search,setSearch] = useState('');
  const [filtered, setFiltered] = useState([...books]);
  useEffect(()=>{
    fetch('./../../products.json',{
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setBooks(res.livros))
  },[]);

  useEffect(()=>{
    setFiltered(books)
  })

  const clickHandler = (e) => {
    const aux = books.filter((book) => {
      return book.nome.toLowerCase().includes(search.toLowerCase());
    })
    setFiltered([...aux]);
  }



  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column" }}>
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,margin:"20px",backgroundColor:"#8dbeda" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1,color:"white" }}
          placeholder="Buscar Livros"
          inputProps={{ 'aria-label': 'Buscar Livros' }}
          onChange={(e) => {
            setSearch(e.currentTarget.value)
          }}
        />
        <IconButton type="button" sx={{ p: '10px',color:"white" }} aria-label="search" onClick={clickHandler}>
          <SearchIcon />
        </IconButton>
      </Paper> 
      {/*<picture>*/}
      {/*    <source media="(max-width: 678px)"  srcSet='./../../../visual/promocoes/promocoes5_gorda.png'/>*/}
      {/*    <img id="promo_img" src="./../../../visual/promocoes/promocoes5.webp" alt="Promocao do Dia" />*/}
      {/*</picture>*/}
      {/* <Grid container spacing={2}>
        {books.map((item) =>(
              <Grid item xs={3} key={item.nome}>
                <ImgMediaCard arq={item.nome_arquivo} nome={item.nome} tipo={item.categoria} preco ={item.preco} estoque ={item.estoque}/>
              </Grid>
          ))}
      </Grid> */}
      <RenderBooks books={filtered}/>
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