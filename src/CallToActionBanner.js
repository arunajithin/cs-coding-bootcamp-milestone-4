import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

function CallToActionBanner(){
    return(

        <Box className="home-banner" sx={{ my: 6, mx: 6, bgcolor: '#b5d56a', borderRadius: '10px' }}>
            <Container maxWidth="lg" sx={{ py: 6}}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography variant="h2" mb={1}>
                                Fast & Free Delivery
                            </Typography>
                            <Typography variant="body1" mb={1}>
                                Start your daily shopping with Urban Fresh
                            </Typography>
                            <Button variant="contained">Order Now</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CallToActionBanner;