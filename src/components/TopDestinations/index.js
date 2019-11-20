import React from "react";
import './index.css'
import Beach from '../../assets/images/beachfront.jpeg'
import Mountain from "../../assets/images/mountains.jpeg";
import Waterfall from "../../assets/images/waterfall.jpeg";
import City from "../../assets/images/city.jpeg";
import Wildlife from "../../assets/images/monkey2.jpeg";
import Culture from "../../assets/images/culture.jpeg";
import Underwater from "../../assets/images/underwater.jpeg";
import Historical from "../../assets/images/buddha.jpeg";
import SunsetBeach from "../../assets/images/sunsetbeach.jpeg";

const TopDestinations = () => {
  const destinations = [
    {
      destination: "beach",
      image: Beach
    },
    {
      destination: "mountain",
      image: Mountain
    },
    {
      destination: "waterfall",
      image: Waterfall
    },
    {
      destination: "city",
      image: City
    },
    {
      destination: "nature",
      image: Wildlife
    },
    {
      destination: "cultural",
      image: Culture
    },
    {
      destination: "underwater spot",
      image: Underwater
    },
    {
      destination: "historical sites",
      image: Historical
    },
    {
      destination: "All Destinations",
      image: SunsetBeach
    }
  ];


  return (
    <>
      <div className="top-destinations-container row">
        <div className="twelve columns text-center header-content">
          <hr />
          <h2 className="text-bold header">Top destinations</h2>
          <p className="container">
            We hand-picked the best destinations for you to explore
          </p>
        </div>
        <div className="eleven columns cards-container">
          {destinations.map(({ destination, image }) => {
            return (
              <div
                className="desination-card-container"
                style={{ backgroundImage: `url(${image})` }}
                key={destination}
              >
                <div className="desination-card-content">
                  <h3 className="destination-name">{destination}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row"></div>
    </>
  );
};

export default TopDestinations;
