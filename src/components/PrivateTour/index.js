import React, { PureComponent } from 'react'
import DatePicker from '../DatePicker'
import './index.css'

class PrivateTour extends PureComponent {
  render() {
    return (
      <>
        <div className="row airplane-container">
          <DatePicker />
          <div className="twelve columns text-center invite">
            <h2 className="text-bold">expert-designed private tour</h2>
            <p className="container">
              Travia craft unforgettable personal adventtures in small groupds.
              We set the standard in custom designed private tours around
              Indonesia. You are invited to experience Indonesia's most exciting
              destinations with an authenticty of experience.
            </p>
          </div>
          <div className="eleven columns">
            <div className="three columns upset">
              <h2 className="text-bold border-top big-title">How would you</h2>
              <h2 className="text-bold">like to travel</h2>
              <p className="w-65">
                All of our tours are private and customizable, developed to suit
                your interestm time and budget.
              </p>
            </div>
            <div className="three columns">
              <h3>Tour packages</h3>
              <p className="w-65">
                Our pre-planned packages itineraries and meticulously perfected.
                It's designed for people who wants to see the must see sites
                with a specific amount of time
              </p>
            </div>
            <div className="three columns">
              <h3>Daily tour</h3>
              <p className="w-65">
                Pre-Planned packages itineraries that will cater your daily
                trip. Daily tour is perfect for people who want to experience
                more in a short period
              </p>
            </div>
            <div className="three columns">
              <h3>Custom Tour</h3>
              <p className="w-65">
                Completely personalized itineraries are our specialty. We want
                to simplify your varoius travel needs by letting you create your
                own journey.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PrivateTour