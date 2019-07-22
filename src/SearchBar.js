import React from 'react';
import EngineSelector from './EngineSelector';
import {FaGoogle, FaImages, FaStackOverflow, FaCalculator, FaYoutube, FaSpotify, FaAmazon } from 'react-icons/fa';

class SearchBar extends React.Component 
{
  constructor()
  {
    super();
    this.engines=[
        {name:<FaGoogle/>, prefix:"!g"},
        {name:<FaImages/>, prefix:"!gi"},
        {name:<FaYoutube/>, prefix:"!yt"},
        {name:<img id="mdn-logo" src="mdnlogo.svg" alt=""></img>, prefix:"!mdn"},
        {name:<FaStackOverflow/>, prefix:"!so"},
        {name:<FaCalculator/>, prefix:"!wa"},
        {name:<FaSpotify/>, prefix:"!spotify"},
        {name:<FaAmazon/>, prefix:"!auk"},
      ];
    this.currentEngines = new Set();

    this.handleCheckboxes = this.handleCheckboxes.bind(this);

    this.eng = [];
    for (var i = 0; i < this.engines.length; i++) 
    {
        this.eng.push(<EngineSelector callback={this.handleCheckboxes} engine={this.engines[i]}/>);
    }
  }

  handleCheckboxes(engine)
  {
    if(this.currentEngines.has(engine))
    {
      this.currentEngines.delete(engine);
    }
    else
    {
      this.currentEngines.add(engine);
    }
  }

  handleKeyPress = (event) => 
  {
    if(event.key === 'Enter')
    {
      const searchterm = encodeURIComponent(document.getElementById("searchbar").value)
      if(this.currentEngines.size === 0)
      {
        window.open("https://duckduckgo.com/?q="+searchterm, "_self");
      }
      else
      {
        for (let item of this.orderSet(this.currentEngines))
        {
          window.open("https://duckduckgo.com/?q="+item.prefix+" "+searchterm, (this.currentEngines.size === 1) ? "_self": "_blank");
        }
      }
    }
  }

  orderSet(set)
  {
    var newset = new Set();
    var tempStack = [];
    for (let item of set)
    { 
      tempStack.push(item);
    }
    for (var i = 0; i < set.size; i++)
    {
      newset.add(tempStack.pop());
    }
    return newset;
  }


  render() 
  {
    return <div className="searchbox">
      <div className="carousel">
      {this.eng}
      </div>
      <input id="searchbar" type="search" onKeyPress={this.handleKeyPress} autoFocus/>
    </div>
  }
}

export default SearchBar;