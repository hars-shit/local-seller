import React from "react";
import { useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <Container>
    <Box    sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        mt: 15,
      
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      
      }}>
      <Typography variant="h4" sx={{ mb: 2, color:"rgba(0, 0, 0, 0.87)" }}>
        Log In
      </Typography>
      <FormControl onSubmit={handleSubmit} action={<Link to="/login" />}>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="outlined" sx={{backgroundColor:'#92e427',color:"rgba(0, 0, 0, 0.87)",fontWeight:'bold'}}  type="submit">
          Log in
        </Button>
      </FormControl>
      <Typography sx={{mb:2}}>
        don't have an account ! <Link to="/signup">Sign up</Link>
      </Typography>
     
   </Box>
    </Container>
  );
};

export default Login;
