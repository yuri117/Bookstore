import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import {useEffect } from "react";
import axios from 'axios';
import useAuth from '../../hooks/useAutentication';

export default function EditUsers() {

  const {user} = useAuth()
  const [users,setUsers] = React.useState([]);

  useEffect(()=>{
    fetch('http://localhost:4242/api/clients',{
      method:"GET",
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res =>{ 
        setUsers(res)
      })
      .catch(error => console.log("error",error))
  },[]);

  const handleToggle = async (value) => {
    const newRoles = [...users];
    const usuario = users.filter((user) =>{
      return user.user === value;
    })
    const index = users.indexOf(usuario[0]);
    if (usuario[0].admin) {
      axios.put(`http://localhost:4242/api/clients/${value}`,{
        "user":value,
        "senha":usuario[0].senha,
        "admin":false
      }).catch(err => console.log(err))
      usuario[0].admin = false;
    }
    else{
      axios.put(`http://localhost:4242/api/clients/${value}`,{
        "user":value,
        "senha":usuario[0].senha,
        "admin":true
      }).catch(err => console.log(err))
      usuario[0].admin = true;
    }
    newRoles[index].admin = usuario[0].admin;
    setUsers(newRoles)

  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Usuários  Administradores</ListSubheader>}
    >
        {users.map((item) =>{
                const labelId = `checkbox-list-secondary-label-${item.user}`;
                return(
                <ListItem
                    key={item.user}
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={e => handleToggle(item.user)}
                        checked={item.admin}
                        inputProps={{ 'aria-labelledby': labelId }}
                        disabled={user.username === item.user}
                    />
                    }
                    disablePadding
                >
                    <ListItemText id={`switch-list-label-${item.user}`} primary={`${item.user}`}/>
                </ListItem>
        )})}
    </List>
  );
}