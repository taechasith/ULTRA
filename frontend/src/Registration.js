import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    console.log("Register:", email, password);
    alert("Registration successful (dummy).");
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        {/* Header */}
        <Typography variant="h3" component="h1" gutterBottom>
          ULTRA Project Registration
        </Typography>
        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            fullWidth 
            margin="normal"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <TextField 
            label="Confirm Password" 
            variant="outlined" 
            type="password" 
            fullWidth 
            margin="normal"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Register
          </Button>
        </form>
        {/* Login Link */}
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Already have an account?{' '}
          <Link href="/" onClick={() => navigate('/')}>
            Login here.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Registration;
