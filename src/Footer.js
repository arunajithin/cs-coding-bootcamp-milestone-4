import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#f0f3f2"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box variant="h6" mb={4}>Company</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box variant="h6" mb={4}>Quicklinks</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box variant="h6" mb={4}>More</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box variant="h6" mb={4}>Download Our App</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
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
        </Container>
      </Box>
    </footer>
    )
}


export default Footer;