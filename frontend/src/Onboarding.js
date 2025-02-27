import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const navigate = useNavigate();

  // State for demographics
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  // Example mental health questions (PHQ-9 style, simplified)
  // We'll store each question's response in state
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the values
    const formData = {
      age,
      gender,
      nationality,
      q1,
      q2,
      q3,
    };
    console.log('Onboarding Data:', formData);

    // In a real app, you'd POST this data to your backend
    alert('Onboarding Complete! (Data logged in console)');
    navigate('/'); // redirect to login or next step
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
          Onboarding Survey
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Demographics */}
          <Typography variant="h6" gutterBottom>
            Demographics
          </Typography>
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {/* Gender Radio */}
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Nationality"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />

          {/* Example Mental Health Questions */}
          <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
            Sample Mental Health Questions
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={q1}
                onChange={(e) => setQ1(e.target.checked)}
              />
            }
            label="Little interest or pleasure in doing things?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={q2}
                onChange={(e) => setQ2(e.target.checked)}
              />
            }
            label="Feeling down, depressed, or hopeless?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={q3}
                onChange={(e) => setQ3(e.target.checked)}
              />
            }
            label="Trouble falling or staying asleep, or sleeping too much?"
          />

          <Button 
            type="submit"
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ marginTop: 3 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Onboarding;
