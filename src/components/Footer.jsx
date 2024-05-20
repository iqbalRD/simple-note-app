import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy;Design by Dicoding</p>
    </footer>
  );
}
const footerStyle = {
  bottom: '0',
  width: '100%',
  backgroundColor: '#3334',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
};
