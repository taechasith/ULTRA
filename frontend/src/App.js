import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Onboarding from './Onboarding'; // <-- import your new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/onboarding" element={<Onboarding />} /> {/* new route */}
      </Routes>
    </Router>
  );
}

export default App;
