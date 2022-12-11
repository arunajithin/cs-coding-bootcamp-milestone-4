import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import styles from './styles.module.css';

import GooglePlayImage from './assets/images/googleplay-btn.svg';
import AppStoreImage from './assets/images/appstore-btn.svg';

function Footer() {
    return ( 
      <div>
      <Box sx={{ mt: 6, bgcolor: '#f0f3f2', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container >
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" mb={4} className={styles.footerListTitle}>Company</Typography>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Terms & Conditions
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" mb={4} className={styles.footerListTitle}>Quicklinks</Typography>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Payments
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Shipping
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Returns
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" mb={4} className={styles.footerListTitle}>Categories</Typography>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Fruits & Vegetables
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Dairy & Egg
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Meat & Poultry
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Snacks
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" mb={4} className={styles.footerListTitle}>Download Our App</Typography>
              <Box sx={{ mb: '10px' }}
              component="img"
              alt="Download Our App"
              src={GooglePlayImage} />
              <Box sx={{ mb: '10px' }}
              component="img"
              alt="Download Our App"
              src={AppStoreImage} />
              
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 5 }} bgcolor="#f0f3f2" color="black" borderTop={1}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography variant='p'>Copyright {new Date().getFullYear()} © Urban Fresh. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        
                    </Grid>
                </Grid>
            </Container>
          </Box>
          </div>
    )
}

export default Footer;