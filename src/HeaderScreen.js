import React from "react";
import { Link as ReactLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from './UserContext';

import logo from './assets/images/Wide-and-Full.svg';

const pages = ['Home','Login','Sign Up'];
const pagesPaths = ['/','/login','/register'];

const settings = ['Profile', 'Account', 'Dashboard'];

export default function HeaderScreen(){
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));

    //const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { loggedIn, logoutUser } = React.useContext(UserContext);
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return(
        <div>
            <Box className="" sx={{ py: 2, bgcolor: '#fff' }}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={6} md={2}>
                            <Box
                                component="img"
                                alt="Urban Fresh"
                                href="/"
                                src={logo}
                                height="30px"
                            />
                        </Grid>
                        <Grid item xs={3} md={6}>

                        </Grid>
                        <Grid item xs={3} md={4}>
                            <Stack direction="row" spacing={2}>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                                <Button to="/register" component={ReactLink}>Sign Up</Button>
                                <Button to="/login" component={ReactLink}>Login</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
            
            pages.map(
              (page, i) => (
                  <Button
                    component={ReactLink}
                    to={pagesPaths[i]}
                    key={page}
                    sx={{ my: 2, color: '#000', display: 'block' }}
                  >
                    {page}
                  </Button>
                )
              )
            }
          </Box>
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
              {
                settings.map(
                  (setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  )
                )
              }

              {
                loggedIn ? 
                  <MenuItem onClick={logoutUser}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem> :
                  <MenuItem
                  to={'/register'}
                  component={ReactLink}
                  onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
              }
            </Menu>
                </Container>
            </Box>
        </div>
    );
}