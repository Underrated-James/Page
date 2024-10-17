import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SubmissionSuccess from './components/SubmissionSuccess';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  const [submissionData, setSubmissionData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmissionData(data);
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">My Profile</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact onFormSubmit={handleFormSubmit} />} />
        <Route path="/submission-success" element={
          submissionData ? (
            <SubmissionSuccess name={submissionData.name} message={submissionData.message} />
          ) : (
            <h1>Submission Error</h1>
          )
        } />
      </Routes>
    </Router>
  );
};

export default App;
