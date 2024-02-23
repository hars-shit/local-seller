import { Box, Grid} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Product = () => {
  return (
    <Box sx={{ height:"100%",display: "flex", flexDirection: 'row' }}>
      {/* for filter function  */}
      <Box sx={{paddingRight:'2rem' }}>
        <Box>
          <h2>Categories</h2>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon /> All</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Electronics</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Fashion</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />Sports</Box>
        </Box>
        <Box>
          <h2>Price</h2>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />100-500</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />500-1500</Box>
          <Box sx={{display:"flex",alignItems:'center',cursor:"pointer"}}><NavigateNextIcon />1500-5000</Box>
        </Box>
      </Box>

      {/* for all data  */}
      <Grid container spacing={2} sx={{height:"100%",overflowY:"scroll"}}>
        {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={item}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2, boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' , borderRadius: '5px' }}>
              <Box sx={{marginBottom:"1rem",width:"80%"}}>
                <img style={{ width: '80%', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'  }} src="https://imgs.search.brave.com/y0NpTLueBYo4Prlg-oC6WDYRaQBFeJjw9DYJEctl7YI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzMyLzY0/LzM2MF9GXzU4MzMy/NjQ5M19zbFczSU1J/cnEycGZMQmNlR0l5/TUVlOXBxZUszOUhR/di5qcGc" alt="" />
              </Box>
              <Box sx={{fontSize:"16px",fontWeight:'600',width:"100%",textAlign:"initial"}}>
                Nike Air Jorden
              </Box>
              <Box sx={{width:"100%",textAlign:"initial"}}>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center',fontWeight:'600',fontSize:"16px",width:"100%",textAlign:"initial"}}>
              <CurrencyRupeeIcon sx={{fontSize:"16px"}}/> 7000
              </Box>
              <Box sx={{display:"flex",gap:'1rem',marginTop:"1rem",width:"100%",textAlign:"initial"}}>
                <button style={{background:"#92e427",border:"none",color:'white',borderRadius:'5px',padding:'10px'}}>View More</button>
                <button style={{display:"flex",alignItems:"center",background:"rgba(0, 0, 0, 0.87)",border:"none",color:'white',borderRadius:'5px',padding:'10px'}}><ShoppingCartIcon sx={{marginRight:'5px'}}/>Add to Cart</button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Product;
