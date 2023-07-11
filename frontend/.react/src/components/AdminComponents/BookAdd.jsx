import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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


const BookAdd = () =>{
    const navigate = useNavigate();
    const [descricao,setDescricao] = useState("");
    const [nome,setNome] = useState("");
    const [nomeArq,setNomeArq] = useState("");
    const [preco,setPreco] = useState("0");
    const [estoque,setEstoque] = useState("0");
    const [categoria,setCategoria] = useState("");
    const [success,setSuccess] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = () => {
        if (categoria === "" || categoria === "" || descricao === "" || nome === "" || nomeArq === "" || preco === "" || estoque === "" ) {
            setError("Preencha todos os campos!");
            return;
        }
        axios.post(`http://localhost:4242/api/products`,{
            "id": Math.random(),
            "descricao":descricao,
            "nome": nome,
            "categoria": categoria,
            "preco": preco,
            "estoque": estoque,
            "nome_arquivo": nomeArq
        }).catch(error => console.log("error",error))

        setSuccess("Livro Cadastrado com Sucesso!");

    }

    const handleCancel = () =>{
        navigate("/admin");
    }

    return(
        
        <Box component="form" sx={{ flexGrow: 1,maxWidth:850,margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5 }}>
            <FormControl variant="standard">
                <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Titulo"
                        defaultValue={nome}
                        onChange={e => setNome(e.target.value)}
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Descrição"
                        placeholder="descrição"
                        multiline
                        variant="standard"
                        defaultValue={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="nome do arquivo"
                        placeholder="nome_do_arquivo.jpg"
                        variant="standard"
                        defaultValue={nomeArq}
                        onChange={e => setNomeArq(e.target.value)}
                        fullWidth
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categoria"
                        defaultValue={"autoajuda"}
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
                        <Grid item xs={6} md={6} sx={{display:"flex",justifyContent:"center"}}>
                            <TextField required id="standard-required" label="Em estoque" type='number' variant="standard" value={estoque} fullWidth defaultValue={estoque} onChange={e => setEstoque(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        </Grid>
                        <Grid item xs={6} md={4} sx={{display:"flex",justifyContent:"center"}}>
                            <TextField  required id="standard-required" label="Preço" variant="standard" defaultValue={preco} value={preco} fullWidth onChange={e => setPreco(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        </Grid>
                        {success !== "" ?(
                            <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Alert onClose={() => window.location.reload(false)} severity="success">{success}</Alert>
                            </Grid>
                        ):""}
                        {error !== "" ?(
                            <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Alert onClose={e => setError("")} severity="error">{error}</Alert>
                            </Grid>
                        ):""}
                    </Grid>
                    <BtComprar size="large" onClick={handleSubmit}>Adicionar Livro</BtComprar>
                    <BtComprar size="large" onClick={handleCancel} color="error">Cancelar</BtComprar>
                </Grid>
                </Grid>
            </FormControl>
        </Box>
    )
}

export default BookAdd;