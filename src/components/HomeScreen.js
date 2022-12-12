
import * as React from 'react';
import groceryImg from './assets/images/grocery.jpg';
import fruits from './assets/images/Fruits-and-Vegetables.jpg';
import bakery from './assets/images/bakery2.jpg';
import beverages from './assets/images/beverages.jpg';
import chicken from './assets/images/chicken.jpg';
import cleaningSet from './assets/images/cleaning-set.jpg';
import dairies from './assets/images/fresh-dairy-products.jpg';
import healthNbeauty from './assets/images/health-beauty.jpg';
import legumes from './assets/images/legumes.jpg';
import snacks from './assets/images/snacks.jpg';
import stationary from './assets/images/stationery.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


const fluidImage={
    'maxWidth':'100%',
    'height':'auto'
};

const alText= {
    'position': 'absolute',
    'top':'50%',
    'left':'24%',
    'color':'white',
    'backgroundColor':'rgb(56,51,51)',
    'width':'50vw',
    'padding':'6px',
    'borderRadius':'10px',
    'opacity':'.7',
    'textShadow':'rgb(36,70,3) 3px 1px'
}

const catText = {
  'textAlign':'center',
  'paddingBottom':'15px',
  span:{
    'color':'#7D9113'
  }
}

const center={
    'position':'relative'
}

const productCards = ['Fruits & Vegetables','Dairy & Eggs','Meat & Poultry','Baked Products','Beverages','Legumes','Snacks','Cleaning Set','Stationary','Health & Beaulty']
const productImages = [fruits,dairies,chicken,bakery,beverages,legumes,snacks,cleaningSet,stationary,healthNbeauty];

function HomeScreen(){
    return(
         <React.Fragment>
      <Card>

        <div  style={center}>

          <CardMedia src={groceryImg} component='img' alt="offers" style={fluidImage}/>

        <div style={alText}>

              <ThemeProvider  theme={theme}>

      <Typography  flexGrow="1" textAlign="center" variant="h3">
        Festive Offers</Typography>

    </ThemeProvider>
      </div>
    </div>
          </Card>

<div style={catText}>
   <h3>Shop by <span style={catText.span}>category</span></h3>
 <Grid container spacing={2} paddingLeft={15} display="flex">
 
{productCards.map((cards,i) => (
    <Grid item xl={2}>

     <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productImages[i]}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom fontSize="20px" component="div" key={cards}>
          {cards}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  ))}


</Grid>
</div>  

    </React.Fragment>

export default HomeScreen;