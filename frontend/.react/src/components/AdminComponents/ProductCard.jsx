import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {useEffect,useState } from "react";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function ProductCard({_id}) {
    const navigate = useNavigate();
    let livro = null;
    const [descricao,setDescricao] = useState("");
    const [nome,setNome] = useState("");
    const [nomeArq,setNomeArq] = useState("");
    const [preco,setPreco] = useState("");
    const [estoque,setEstoque] = useState("");
    const [categoria,setCategoria] = useState("");

    useEffect(()=>{
      fetch(`http://localhost:4242/api/products/${_id}`,{
        method:"GET",
        headers:{
            Accept: "application/json"
        },
      })
      .then(res => res.json())
      .then(res => {
          livro = res;
          setCategoria(res.categoria);
          setDescricao(res.descricao);
          setNome(res.nome);
          setNomeArq(res.nome_arquivo);
          setPreco(res.preco);
          setEstoque(res.estoque);
      });

    })

    
    const pathbook = "./../../../visual/livros/" +categoria+"/"+nomeArq+".jpg"

    const clickHandler = () => {
        navigate("/bookEdit",{
          state:{
            _id:_id,
            book:livro
          }
        })
      }
    const clickDelete = () => {
        fetch(`http://localhost:4242/api/products/${_id}`,{
            method:"DELETE",
            headers:{
                Accept: "application/json"
            },
        })
        .catch(error => console.log("error",error))
        window.location.reload(false);
      }

  return (
    <Card sx={{minHeight:280 ,maxWidth: 500, display: "flex",justifyContent:"space-around" }}>
      <CardMedia
        component="img"
        sx={{ width: 280 }}
        image={pathbook}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ display: "flex",flex: "1 0 auto",flexDirection:"column",justifyContent:"space-around" }}>
          <Typography variant="h5">
            {nome}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {estoque} unidades
          </Typography>
          <Typography variant="h5">
            R$ {preco}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center" }}>
            <Button variant="contained" onClick={clickHandler} sx={{marginTop:"5px"}}>Editar</Button>
            <Button variant="contained" onClick={clickDelete} sx={{marginTop:"5px"}} color="error">Deletar</Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
