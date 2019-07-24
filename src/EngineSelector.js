import React from 'react';
import {FaGoogle, FaImages, FaStackOverflow, FaCalculator, FaYoutube, FaSpotify, FaAmazon, FaReddit, FaMapMarkedAlt } from 'react-icons/fa';
import CheckBox from './CheckBox';
class EngineSelector extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.handleCheckboxes = this.handleCheckboxes.bind(this);

    this.engines= [
      {name:<FaGoogle/>, prefix:"!g"},
      {name:<FaImages/>, prefix:"!gi"},
      {name:<FaYoutube/>, prefix:"!yt"},
      {name:<img id="mdn-logo" src="mdnlogo.svg" alt=""></img>, prefix:"!mdn"},
      {name:<FaStackOverflow/>, prefix:"!so"},
      {name:<FaCalculator/>, prefix:"!wa"},
      {name:<FaSpotify/>, prefix:"!spotify"},
      {name:<FaAmazon/>, prefix:"!smileuk"},
      {name:<FaReddit/>, prefix:"!reddit"},
      {name:<FaMapMarkedAlt/>, prefix:"!mapsuk"},
    ];
    this.currentEngines = new Set();

    this.eng = [];
    for (var i = 0; i < this.engines.length; i++) 
    {
        this.eng.push(<CheckBox key={i} 
                                callback={this.handleCheckboxes} 
                                callbackArg={this.engines[i]} 
                                labelText={this.engines[i].name}
                                cssClass="engineSelector"/>);
    }
  }

  getEngines()
  {
    return this.currentEngines;
  }

  handleCheckboxes(engine)
  {
    this.props.callback(engine);
  }

  render() 
  {
    return  <div className="carousel">
              {this.eng}
            </div>
  }
}

export default EngineSelector;