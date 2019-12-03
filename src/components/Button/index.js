import React from 'react'
const Button = ({ title, onClick }) => (
  <button className="button-primary" onClick={onClick}>
    {title}
  </button>
);

export default Button