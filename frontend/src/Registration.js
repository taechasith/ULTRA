import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        alert("Registration successful!");
        navigate('/onboarding');
      } else {
        alert("Registration error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
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
        <Typography variant="h3" component="h1" gutterBottom>
          ULTRA Project Registration
        </Typography>
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
