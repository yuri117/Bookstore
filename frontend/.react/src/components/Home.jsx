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
    fetch('http://localhost:4242/api/products',{
      method:"GET",
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res =>{ 
        setBooks(res)
        setFiltered(res)
      })
      .catch(error => console.log("error",error))
  },[]);


  const clickHandler = (e) => {
    const aux = books.filter((book) => {
      return book.nome.toLowerCase().includes(search.toLowerCase());
    })
    setFiltered([...aux]);
  }



  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column" }}>
      <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', MaxWidth: 400,margin:"20px",backgroundColor:"#8dbeda" }}
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
