import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import './../App.css';
import PropTypes from 'prop-types';
import BookPage from "./BookPage.jsx";
import {Link, useNavigate} from 'react-router-dom';

const BtComprar = styled(Button)({
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

function ImgMediaCard({src,alt}) {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/book",{
      state:{
        link:src
      }
    })
  }
  return (
    <Card sx={{ maxWidth: 345,backgroundColor:"#8dbeda",padding:2,borderRadius:5}}>
      <CardMedia
        component="img"
        alt={alt}
        height="330"
        image={src}
        sx={{margin:"auto"}}
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
            {alt}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}} variant="h6" component="div">
            R$ 99,90
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <BtComprar size="small" onClick={clickHandler}>Comprar</BtComprar>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
    src:PropTypes.any,
    alt:PropTypes.string,
}

export default ImgMediaCard