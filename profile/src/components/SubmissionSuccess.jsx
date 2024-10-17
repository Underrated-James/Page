import React from 'react';
import { Container } from 'react-bootstrap';

const SubmissionSuccess = ({ name, message }) => {
  return (
    <Container>
      <h1>Submission Successful!</h1>
      <p>Thank you, {name}! Your message has been sent.</p>
      <p>Message: {message}</p>
    </Container>
  );
};

export default SubmissionSuccess;
