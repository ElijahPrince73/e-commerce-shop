import React from 'react'
import './index.css'
const Button = ({ title }) => (
  <button className="button-primary picker-button" type="submit">
    {title}
  </button>
);

export default Button