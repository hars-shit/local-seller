import React, {useState} from 'react';
import { TextField, Button, Container, Stack,Box, Typography } from '@mui/material';
import { Link } from "react-router-dom"
export const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email,  password,confirmPassword) 
    }
  return (
    <Container sx={{width:'70'}} >
    <Box   sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        mt: 15,
        
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      
      }}>
   
   <Typography variant='h4' sx={{mb:2}}>New User</Typography>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
             
                <Button variant="outlined" type="submit" sx={{backgroundColor:'#92e427',color:"rgba(0, 0, 0, 0.87)",fontWeight:'bold'}}>Sign up</Button>
            </form>
            <Typography sx={{mb:2}}>Already have an account? <Link to="/login">Login Here</Link></Typography>
            </Box>
</Container>
  )
}
