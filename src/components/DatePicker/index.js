import React, { PureComponent } from "react";
import "./index.css";

class DatePicker extends PureComponent {
  state = {};

  render() {
    return (
      <div className="picker-container">
        <div className="picker-options">
          <p>Tour</p>
          <p>Airport Transfer</p>
          <p>Rental Car</p>
          <p>Fast Boat Ticket</p>
        </div>
        <div className="picker-info-container">
          <div className="picker-actual">
            <div className="picker-option-titles">
              <p>Start date</p>
              <p>Durations</p>
              <p>Adults</p>
              <p>Children</p>
              <p>Tour Type</p>
            </div>
            <div className="picker-input-container">
              <p className="picker-item">
                18<span>Oct Wed</span>
              </p>
              <p className="picker-item">
                2 <span>days</span>
              </p>
              <p className="picker-item">
                2 <span>12+ years</span>
              </p>
              <p className="picker-item">
                0 <span>1 - 12 years</span>
              </p>
              <select className="">
                <option value="Option 1">Full Package</option>
              </select>
            </div>
          </div>
          <button className="button-primary picker-button" type="submit">
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default DatePicker;
