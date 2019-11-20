import React from 'react'
import Slider  from '../../components/Slider'
import PrivateTour from "../../components/PrivateTour";
import TopPackageTours from "../../containers/TopPackageTours";
import TopDestinations from "../../components/TopDestinations";
const Home = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <Slider />
        <PrivateTour />
        <TopPackageTours />
        <TopDestinations />
      </div>
    </div>
  );
}

export default Home