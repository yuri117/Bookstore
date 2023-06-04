import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Link,useParams,useLocation} from 'react-router-dom';
import { useState } from 'react';

const BookPage = (props) =>{
    const {book} = useParams();
    const location = useLocation();
    const txtPath = location.state.link.split(".jpg")[0] +".txt"
    const name = location.state.link.split(".jpg")[0].split("/")[6].replaceAll("_"," ")
    const [text,setText] = useState("");
    fetch(txtPath)
    .then(r => r.text())
    .then(text => {
        setText(text);
    });
    return(
        
        <Box sx={{ flexGrow: 1,maxWidth:850,margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                  <img style={{maxWidth:"350px"}} src={location.state.link}/>
              </Grid>
              <Grid item xs={6} md={6}>
                  <Typography sx={{fontWeight: 'bold'}} variant='h5'>
                    {name}
                  </Typography>
                  <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.primary">
                     {text}
                  </Typography>
                  <Grid container spacing={2} sx={{marginTop:5}}>
                    <Grid item xs={6} md={6} sx={{display:"flex",alignItems:"center"}}>
                        <Typography sx={{fontWeight: 'bold'}} variant='h5'>
                            R$ 29,90
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            id="standard-basic"
                            label="Quantidade"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                                style:{textAlign:"center"}
                            }}
                            InputProps={{
                                inputProps:{min:1}
                            }}
                            defaultValue={1}
                        />
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
        </Box>
    )
}

export default BookPage;