import React from 'react'
import Slider from '../../components/Slider'
import DatePicker from '../../components/DatePicker'
import PrivateTour from '../../components/PrivateTour'
const Home = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <Slider />
        <PrivateTour />
      </div>
    </div>
  );
}

export default Home