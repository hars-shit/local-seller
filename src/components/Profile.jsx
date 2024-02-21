import { Avatar} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number:'',
        totalItemsPurchased: 0,
        totalPriceInCart: 0
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      return (
        <div className="flex items-center" style={{display:"flex",flexDirection:'column',width:'100%'}}>

          {/* for arrow  */}
        <div style={{display:'flex',alignItems:'center',marginBottom:'2.5rem'}}>
          <ArrowBackIcon /><span style={{marginLeft:'0.5rem',fontSize:24}}>Profile</span>
        </div>
        
                <div style={{display:'flex',justifyContent:"space-evenly",flexDirection:"row",width:'100%'}}>
         
          <div style={{marginTop:'2rem',width:"40%"}}>   
          <div style={{display:'flex',flexDirection:'column',gap:'2rem',width:'100%'}}>
            <div>
            <span >Name</span>
            <input 
              type="text" 
              name="name" 
              style={{width:"100%",height:"35px",borderRadius:'10px'}}
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
              className="mb-2 p-2 w-full border rounded"
            />
              </div>
              <div>
                <span>Mobile Number</span>
            <input 
              type="text" 
              name="number" 
              style={{width:"100%",height:"35px",borderRadius:'10px'}}
              value={formData.number} 
              onChange={handleChange} 
              placeholder="mobile number" 
              className="mb-2 p-2 w-full border rounded"
              />
              </div>
              <div>
                <span>Email address</span>
            <input 
              type="text" 
              name="email" 
              style={{width:"100%",height:"35px",borderRadius:'10px'}}
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              className="mb-2 p-2 w-full border rounded"
              />
              </div>
              <div>
                <span>Total Order Placed</span>
            <input 
              type="number" 
              name="totalItemsPurchased" 
              style={{width:"100%",height:"35px",borderRadius:'10px'}}
              value={formData.totalItemsPurchased} 
              onChange={handleChange} 
              placeholder="Total Items Purchased" 
              className="mb-2 p-2 w-full border rounded"
              />
              </div>
          </div>
          <div style={{textAlign:'end',marginTop:'2rem'}} >
            <button  onClick={() => console.log(formData)} style={{width:'125px',height:"35px",border:'none',color:"white",borderRadius:'5px',background:"#1976d2"}}>
              Update Profile
            </button>
          </div>
          </div>
          <div>
            <Avatar alt="Profile Image" src={formData.image} sx={{ width: 100, height: 100, margin: 'auto' }} />
          </div>
        </div>
      </div>
      
      );
}

export default Profile
