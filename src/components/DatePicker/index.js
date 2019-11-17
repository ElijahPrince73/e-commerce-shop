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
              <div className="picker-item">
                <p>18</p>
                <div className="sub-item">
                  <p>Oct</p>
                  <p>Wed</p>
                </div>
              </div>
              <div className="picker-item">
                <p>2</p>
                <div className="sub-item">
                  <p> Days</p>
                </div>
              </div>
              <div className="picker-item">
                <p>2</p>
                <div className="sub-item">
                  <p>12+</p>
                  <p>Years</p>
                </div>
              </div>
              <div className="picker-item">
                <p>0</p>
                <div className="sub-item">
                  <p>1 - 12</p>
                  <p>Years</p>
                </div>
              </div>
              <select className="picker-item-select">
                <option value="Option 1">Full Package</option>
                <option value="Option 1">Half Package</option>
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
