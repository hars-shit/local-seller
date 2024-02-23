import { Container, Typography, Box, Grid, Button, Card, Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MdDelete } from "react-icons/md";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const Cart = () => {
  
  return (
    <Container >
      <Box style={{display:'flex',alignItems:'center',marginBottom:'2.5rem'}}>
        <ArrowBackIcon />
        <span style={{marginLeft:'0.5rem',fontSize:24}}>Shopping cart</span>
      </Box>

      <Grid container spacing={2} >
        {/* First Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth:'25rem', display:'flex',alignItems:'center',gap:'1rem',height:'8rem'}}>
            <Box>
              <img style={{ width: '8rem', height: 'auto', objectFit: 'cover' }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="Nike Air Jorden Max" />
            </Box>
            {/* Second Part */}
            <Box >
              <Typography sx={{ fontWeight:'bold' }}>Nike Air Jorden Max</Typography>
              <Typography sx={{ color:'gray' }}>Red Jumbo</Typography>
              <Box sx={{ display:'flex', gap:'1rem' }}>
                <Button variant="outlined"><RemoveIcon/></Button>
                <Box sx={{ display:'flex', alignItems:'center', fontWeight:'600' }}>0</Box>
                <Button variant="outlined"><AddIcon/></Button>
              </Box>
            </Box>
            {/* Third Part */}
            <Box >
              <DeleteIcon/>
              <Typography sx={{ mt:'1rem' }}>$700</Typography>
            </Box>
          </Card>
        </Grid>
      
        {/* Second Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth:'25rem', display:'flex', alignItems:'center',gap:'1rem',height:'8rem' }}>
            <Box>
              <img style={{ width: '8rem', height: 'auto', objectFit: 'cover' }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="Nike Air Jorden Max" />
            </Box>
            {/* Second Part */}
            <Box >
              <Typography sx={{ fontWeight:'bold' }}>Nike Air Jorden Max</Typography>
              <Typography sx={{ color:'gray' }}>Red Jumbo</Typography>
              <Box sx={{ display:'flex', gap:'1rem' }}>
                <Button variant="outlined"><RemoveIcon/></Button>
                <Box sx={{ display:'flex', alignItems:'center', fontWeight:'600' }}>0</Box>
                <Button variant="outlined"><AddIcon/></Button>
              </Box>
            </Box>
            {/* Third Part */}
            <Box >
              <DeleteIcon/>
              <Typography sx={{ mt:'1rem' }}>$700</Typography>
            </Box>
          </Card>
        </Grid>
      
        {/* Third Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth:'25rem', display:'flex', alignItems:'center',gap:'1rem',height:'8rem'}}>
            <Box>
              <img style={{ width: '8rem', height: 'auto', objectFit: 'cover' }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="Nike Air Jorden Max" />
            </Box>
            {/* Second Part */}
            <Box>
              <Typography sx={{ fontWeight:'bold' }}>Nike Air Jorden Max</Typography>
              <Typography sx={{ color:'gray' }}>Red Jumbo</Typography>
              <Box sx={{ display:'flex', gap:'1rem' }}>
                <Button variant="outlined"><RemoveIcon/></Button>
                <Box sx={{ display:'flex', alignItems:'center', fontWeight:'600' }}>0</Box>
                <Button variant="outlined"><AddIcon/></Button>
              </Box>
            </Box>
            {/* Third Part */}
            <Box>
              <DeleteIcon/>
              <Typography sx={{ mt:'1rem',maxWidth:'100%' }}>$700</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth:'25rem', display:'flex', alignItems:'center',gap:'1rem',height:'8rem'}}>
            <Box>
              <img style={{ width: '8rem', height: 'auto', objectFit: 'cover' }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="Nike Air Jorden Max" />
            </Box>
            {/* Second Part */}
            <Box>
              <Typography sx={{ fontWeight:'bold' }}>Nike Air Jorden Max</Typography>
              <Typography sx={{ color:'gray' }}>Red Jumbo</Typography>
              <Box sx={{ display:'flex', gap:'1rem' }}>
                <Button variant="outlined"><RemoveIcon/></Button>
                <Box sx={{ display:'flex', alignItems:'center', fontWeight:'600' }}>0</Box>
                <Button variant="outlined"><AddIcon/></Button>
              </Box>
            </Box>
            {/* Third Part */}
            <Box>
              <DeleteIcon/>
              <Typography sx={{ mt:'1rem',maxWidth:'100%' }}>$700</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Common box for subtotal, shipping, and total */}
      <Typography sx={{fontWeight:'700', mb:'1rem',mt:'1rem'}}>ORDER SUMMARY</Typography>
      <Box sx={{ display: 'contents', justifyContent: 'space-around', fontWeight:'600' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4', mt: '4', mb: '3%' }}>
          <Box>SubTotal</Box>
          <Box sx={{ ml: 'auto' }}>$76.77</Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4', mb: '3%'}}>
          <Box>Shipping</Box>
          <Box sx={{ ml: 'auto' }}>$81.77</Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4', }}>
          <Box>Total</Box>
          <Box sx={{ ml: 'auto' }}>$81.77</Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', mt: '5%' }}>
        <Box><Typography>Grand Total</Typography>
        <Typography sx={{fontWeight:'600'}}>$200</Typography></Box>
        <Button variant="outlined" sx={{ backgroundColor: '#92e427', color: 'rgba(0, 0, 0, 0.87)', fontWeight: 'bold', ml:'auto' }}>Checkout</Button>
      </Box>
    </Container>
  );
}

export default Cart;
