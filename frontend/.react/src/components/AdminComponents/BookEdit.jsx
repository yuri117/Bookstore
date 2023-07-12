import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import {useEffect,useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CurrencyInput from 'react-currency-input-field';
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


const BookEdit = () =>{
    const location = useLocation();
    const _id = location.state._id
    let book = location.state.book;
    const [descricao,setDescricao] = useState(book.descricao);
    const [nome,setNome] = useState(book.nome);
    const [nomeArq,setNomeArq] = useState(book.nome_arquivo);
    const [preco,setPreco] = useState(book.preco);
    const [estoque,setEstoque] = useState(book.estoque);
    const [categoria,setCategoria] = useState(book.categoria);
    const [edit,setEdit] = useState("");
    const [error,setError] = useState("");

    const pathbook = "./../../../visual/livros/" +book.categoria+"/"+book.nome_arquivo+".jpg"

    const handleSubmit = () => {
        if (categoria === "" || categoria === "" || descricao === "" || nome === "" || nomeArq === "" || preco === "" || estoque === "" ) {
            setError("Preencha todos os campos!");
            return;
        }
        axios.put(`http://localhost:4242/api/products/${_id}`,{
            "id": book.id,
            "nome": nome,
            "categoria": categoria,
            "preco": preco,
            "estoque": estoque,
            "nome_arquivo": nomeArq
        }).catch(err => console.log(err))
        setEdit("Livro Editado com Sucesso!");


    }

    const handleEstoque = (value) => {

        if(value < 1){
            setError("Por favor coloque um valor de estoque maior que 0!")
        }
        else{
            setEstoque(value)
        }


    }

    const handleCancel = () =>{
        setCategoria(book.categoria);
        setDescricao(book.descricao);
        setNome(book.nome);
        setNomeArq(book.nome_arquivo);
        setPreco(book.preco);
        setEstoque(book.estoque);
    }

    return(
        
        <Box component="form" sx={{ display:"flex", flexGrow: 1,maxWidth:850,margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5 }}>
            <FormControl variant="standard">
                <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img style={{maxWidth:"350px"}} src={pathbook}/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Titulo"
                        defaultValue={book.nome}
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Descrição"
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        defaultValue={book.descricao}
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="nome do arquivo"
                        placeholder="nome_do_arquivo.jpg"
                        variant="standard"
                        defaultValue={book.nome_arquivo}
                        value={nomeArq}
                        onChange={(e) => setNomeArq(e.target.value)}
                        fullWidth
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categoria"
                        defaultValue={book.categoria}
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value={"autoajuda"}>Auto Ajuda</MenuItem>
                        <MenuItem value={"aventura"}>Aventura</MenuItem>
                        <MenuItem value={"literatura"}>Literatura</MenuItem>
                        <MenuItem value={"romance"}>Romance</MenuItem>
                        <MenuItem value={"suspense"}>Suspense</MenuItem>
                    </Select>
                    <Grid container spacing={2} sx={{marginTop:2}}>
                        <Grid item xs={6} md={6} sx={{display:"flex",alignItems:"center"}}>
                            <TextField required id="standard-required" label="Em estoque" type='number' variant="standard" value={estoque} fullWidth defaultValue={book.estoque} onChange={e => handleEstoque(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        </Grid>
                        <Grid item xs={6} md={4} sx={{display:"flex",justifyContent:"center"}}>
                            <TextField  required id="standard-required" label="Preço" variant="standard" defaultValue={book.preco} value={preco} fullWidth onChange={e => setPreco(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        </Grid>
                        {edit !== "" ?(
                            <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Alert onClose={e => setEdit("")} severity="success">{edit}</Alert>
                            </Grid>
                        ):""}
                        {error !== "" ?(
                            <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Alert onClose={e => setError("")} severity="error">{error}</Alert>
                            </Grid>
                        ):""}
                    </Grid>
                    <BtComprar size="large" onClick={handleSubmit}>Salvar Alterações</BtComprar>
                    <BtComprar size="large" onClick={handleCancel} color="error">Cancelar</BtComprar>
                    
                </Grid>
                </Grid>
            </FormControl>
        </Box>
    )
}

export default BookEdit;