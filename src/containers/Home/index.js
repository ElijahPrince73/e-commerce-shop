import React from 'react'
import Slider from '../../components/Slider'
import PrivateTour from '../../components/PrivateTour'
import TopPackageTours from '../..//components/TopPackageTours'
const Home = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <Slider />
        <PrivateTour />
        <TopPackageTours />
      </div>
    </div>
  );
}

export default Home