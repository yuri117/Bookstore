import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import useAuth from '../hooks/useAutentication';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const pages = ['Livros', 'Sobre', 'Serviços','Contato'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {signed,signout,user} = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    console.log(signed);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenLogin = () => {
    navigate("/login")
  };
  const handleOpenLogout = () => {
    signout();
    navigate("/");
  };

  const handleOpenCheckout = () => {
    navigate("/carrinho");
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSettings = () => {
    navigate("/admin");
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src="/visual/logo_teste.png" alt="Logo do Site" style={{width:"80px",margin:"5px"}}></img>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              {signed && user.role ==="admin" && (
                <Tooltip title="Logout">
                  <Button variant="contained" style={{margin:"10px",backgroundColor: '#1E5EAC'}} onClick={handleOpenSettings} startIcon={<SettingsIcon fontSize='medium' sx={{color:"white"}}/>}>
                    CONFIGS
                  </Button>
                </Tooltip>
              )}
              {signed == true ?(
              <Tooltip title="Logout">
                <Button variant="contained" style={{margin:"10px",backgroundColor: '#1E5EAC'}} onClick={handleOpenLogout} startIcon={<LogoutIcon fontSize='medium' sx={{color:"white"}}/>}>
                  SAIR
                </Button>
              </Tooltip>
              ):(
                <Tooltip title="Login">
                  <Button variant="contained" style={{margin:"10px",backgroundColor: '#1E5EAC'}} onClick={handleOpenLogin} startIcon={<LoginIcon fontSize='medium' sx={{color:"white"}}/>}>
                    ENTRAR
                  </Button> 
                </Tooltip>

              ) }
            <Tooltip title="Cart">
              {signed ?(
                <Button variant="contained" style={{margin:"10px",backgroundColor: '#1E5EAC'}} onClick={handleOpenCheckout} startIcon={<ShoppingCartCheckoutIcon fontSize='medium' sx={{color:"white"}}/>}>
                  CARRINHO
                </Button> 
              ):(
                <h2></h2>
              ) }
            </Tooltip>
              
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;