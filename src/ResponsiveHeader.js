import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/images/Wide-and-Full.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Container from '@mui/material/Container';
import LoginScreen from './LoginScreen.js';
import RegistrationScreen from './RegistrationScreen';

//NavBar
const pages = ['Home', 'Fruits & Vegetables', 'Dairy & Eggs', 'Meat & Poultry', 'Baked Products',];
const pagesPaths = ['/', '/fruitsVeg', '/dairyEggs', '/meatPoultry', '/bakedProducts'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#7D9113',
    },
    secondary: {
      main: '#7D9113',
    },
  },
}
);


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40rem',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpen2 = Boolean(anchorEl2);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} to={"/register"} component={RegistrationScreen}></MenuItem>
    </Menu>
  );
  const renderMenu2 = (
    <Menu
      anchorEl2={anchorEl2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen2}
      onClose={handleMenuClose2}
    >
      <MenuItem onClick={handleMenuClose2} to={"/login"} component={LoginScreen}></MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
        <Toolbar>
          <Box>
            <a href="index.html">
              <img width="200px" height="50px" src={logo} alt={"Logo"}/>
            </a>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1, flexWrap: 'wrap'}}>
            <Search>
              <SearchIconWrapper sx={{ color: "black" }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase sx={{ color: "black" }}
                placeholder="Search for something delightful..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="cart menu"
              color="black"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ marginLeft: '20px', flexWrap: 'wrap' }}>
            <Button sx={{backgroundColor: "primary"}} size="small" variant="contained" onClick={handleProfileMenuOpen}>Sign up</Button>
            <Button size="small" variant="text" onClick={handleProfileMenuOpen2}>Log in</Button>
          </Box>

        </Toolbar>
        </Container>
        </ThemeProvider>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: "#f9fff3", boxShadow: '0px 2px 5px #bcbaba'}}>
      <ThemeProvider theme={theme}>
        <Toolbar>
        <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="primary">
        {pages.map((page, i) => (
           <Tab 
           sx={{fontWeight: 'bold'}} 
           label={page}
           component = {ReactLink}
           to = {pagesPaths[i]}
          key={page} />
        )
        )}
      </Tabs>
    </Box>
        </Toolbar>
        </ThemeProvider>
      </AppBar>
      {renderMenu}
      {renderMenu2}
    </Box>
  );
}
