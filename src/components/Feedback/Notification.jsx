import React from 'react';
// import React, { PropTypes } from 'react';


const Notification = ({ message }) => (
  <p>{message}</p>
);

// Notification.propTypes = {
//   message: PropTypes.string.isRequired, // Oczekujemy, że "message" będzie stringiem i jest wymagany
// };

export default Notification;
