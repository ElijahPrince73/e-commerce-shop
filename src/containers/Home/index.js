import React from 'react'
import Slider from '../../components/Slider'
import Picker from '../../components/Picker'
const Home = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <Slider />
        <Picker />
      </div>
    </div>
  );
}

export default Home