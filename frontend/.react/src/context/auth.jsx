import { createContext, useEffect, useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import bcrypt from 'bcryptjs';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const isLogged = localStorage.getItem("loggedIn");

    if (userToken) {
      const username = JSON.parse(userToken).username
      const role = JSON.parse(userToken).role


      setUser({username,role});
    }
  }, []);

  async function login(username,password){
    const response = await axios.get(`http://localhost:4242/api/clients/${username}`)
    .then(res => res.data)
    console.log(response)
    if(response.length === 0){
      return "Usuário não cadastrado";
    }
    let hash = response[0].senha;
    bcrypt.compare(password, hash,(err, res) => {
      if(!res){
        return "Usuário ou senha incorreta!"

      }
    })
    let role = "user";
    if (response[0].admin) {
      role = "admin";
      
    }
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("user_token", JSON.stringify({ username, token,role}));
    setUser({ username, password ,role });
    return;

  }

  const signin = (username, password) => {
    const response = login(username,password)
    return response;
  };

  async function register(username,password) {
    const response = await axios.get(`http://localhost:4242/api/clients/${username}`)
    .then(res => res.data)
    
    if (response.length !== 0) {
      return "Usuário já cadastrado!"
    }

    const response2 = await axios.post("http://localhost:4242/api/clients",{
      "user":username,
      "senha":password,
      "admin":false
    }).then(res => {return;})
    .catch(err =>{return err;})    
  }

  const signup = (username, password) => {
    const response = register(username,password);
    return response;
  };

  const signout = () => {
    setUser(null);
    localStorage.setItem("myCart",null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: Boolean(user), signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};