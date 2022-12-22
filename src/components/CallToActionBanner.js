import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import styles from '../styles.module.css';
import { Link } from 'react-router-dom';

import StoreImage from '../assets/images/store-graphics.svg';

function CallToActionBanner(){
    return(

        <Box className="home-banner" sx={{ my: 6, mx: 6, bgcolor: '#b5d56a', borderRadius: '10px' }}>
            <Container maxWidth="lg" sx={{ py: 6, px: 4}}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{px: 3}}>
                            <Typography variant="h2" mb={1} sx={{ color: '#fff', fontSize: '40px', fontWeight: '700' }}>
                                Fast & Free Delivery
                            </Typography>
                            <Typography variant="body1" mb={3} sx={{ color: '#fff', fontSize: '16px' }}>
                                Start your daily shopping with Urban Fresh
                            </Typography>
                            <Button variant="contained" className={styles.btnOrder} component={Link} to="/products">Shop Now</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: '10px' }}
                    component="img"
                    alt="Download Our App"
                    src={StoreImage} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CallToActionBanner;
