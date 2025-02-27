import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    console.log("Login:", email, password);
    alert("Login successful (dummy).");
    // You can add redirection or further logic here
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
          ULTRA Project Login
        </Typography>
        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            fullWidth 
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            type="submit"
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
        {/* Registration Link */}
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don't have an account?{' '}
          <Link href="/register" onClick={() => navigate('/register')}>
            Register here.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
