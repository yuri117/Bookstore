import { useNavigate,Link } from "react-router-dom";
import useAuth from "../../../hooks/useAutentication"
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { TextField,Grid } from '@mui/material';



const Register = () => {
    const {signup} = useAuth();
    const navigate = useNavigate()

    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [senha2,setSenha2] = useState("");
    const [error,setError] = useState("");

    const handleRegister = () => {
        if(!email | !senha){
            setError("Preencha todos os campos!")
            return;
        } else if(senha !== senha2){
            setError("As senhas não são iguais!")
        }   

        const res = signup(email,senha);

        if (res){
            setError(res);
            return;
        }
        <Alert severity="sucess">Usuário cadastrado com sucesso!</Alert>
        navigate("/")

    };

    return(
        <Paper sx={{width:"30%",margin:"auto",marginTop:5,padding:5}}>
            <Typography component="h1" variant="h4" align="center">
                        Register
                    </Typography>
            <Grid container spacing={2} sx={{width:"100%",margin:"auto",textAlign:"center"}}>
                <Grid item sm={12}>
                    <TextField label="Email" variant="outlined" value={email} onChange={(e) => [setEmail(e.target.value),setError("")]} fullWidth />
                </Grid>
                <Grid item  sm={12}>
                    <TextField type="password" label="Senha" variant="outlined" value={senha} onChange={(e) => [setSenha(e.target.value),setError("")]} fullWidth />
                </Grid>
                <Grid item  sm={12}>
                    <TextField type="password" label="Confirmar Senha" variant="outlined" value={senha2} onChange={(e) => [setSenha2(e.target.value),setError("")]} fullWidth />
                </Grid>
                <Grid item sm={12}>
                    {error !== "" && (
                        <Alert severity="error">{error}</Alert>
                    )}
                </Grid>
                <Grid item sm={12}>
                    <Button variant="contained" onClick={handleRegister} sx={{alignContent:"center"}} fullWidth>Cadastrar</Button>
                    <Typography component="subtitle2" variant="subtitle2" align="center">
                        Já tem uma conta? <strong><Link to="/login">Login</Link></strong>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Register;