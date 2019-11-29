import React from 'react'
import Button from '../Button'
import './index.css'
const Footer = () => {
  return (
    <div className="footer-container row">
      <div className="questions-container">
        <h2 className="text-bold header">Any Questions?</h2>
        <p>
          We're here to get you on your way! For personalized assistance
          developing a itinerary, or for general questions, we're a phone call
          or email away.
        </p>
      </div>
      <div className="hours-operations-container">
        <h5 className="header m-0">Call Us</h5>
        <p>800-642-2742</p>
        <h5 className="header m-0">Hours of operation</h5>
        <p className="m-0">Monday - Friday</p>
        <p>7:30AM - 5:00PM(WIB)</p>
      </div>
      <div>
        <h4 className="header">OR</h4>
      </div>
      <div className="button-container">
        <Button title="Email Us" />
      </div>
    </div>
  );
}

export default Footer
