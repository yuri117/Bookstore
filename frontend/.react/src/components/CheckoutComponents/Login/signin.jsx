import { useNavigate,Link } from "react-router-dom";
import useAuth from "../../../hooks/useAutentication"
import { useState } from "react";
import Paper from '@mui/material/Paper';
import { TextField,Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';


const Login = () => {
    const {signin} = useAuth();
    const navigate = useNavigate()

    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [error,setError] = useState("");

    const handleLogin = () => {
        if(!email | !senha){
            setError("Preencha todos os campos!")
            return;
        }

        const res = signin(email,senha);

        if (res){
            setError(res);
            return;
        }

        navigate("/")

    };

    return(
        <Paper sx={{width:"30%",margin:"auto",marginTop:5,padding:5}}>
            <Typography component="h1" variant="h4" align="center">
                        Login
                    </Typography>
            <Grid container spacing={2} sx={{width:"100%",margin:"auto",textAlign:"center"}}>
                <Grid item sm={12}>
                    <TextField label="Email" variant="outlined" value={email} onChange={(e) => [setEmail(e.target.value),setError("")]} fullWidth />
                </Grid>
                <Grid item  sm={12}>
                    <TextField type="password" label="Senha" variant="outlined" value={senha} onChange={(e) => [setSenha(e.target.value),setError("")]} fullWidth />
                </Grid>
                <Grid item sm={12}>
                    {error !== "" && (
                        <Alert severity="error">{error}</Alert>
                    )}
                </Grid>
                <Grid item sm={12}>
                    <Button variant="contained" onClick={handleLogin} sx={{alignContent:"center"}} fullWidth>Entrar</Button>
                    <Typography component="subtitle2" variant="subtitle2" align="center">
                        Não tem uma conta? <strong><Link to="/register">Registre-se</Link></strong>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Login;