import React from 'react';
import EngineSelector from './EngineSelector';
import KeywordSelector from './KeywordSelector';
import {FaGoogle, FaImages, FaStackOverflow, FaCalculator, FaYoutube, FaSpotify, FaAmazon, FaReddit, FaMapMarkedAlt } from 'react-icons/fa';

class SearchBar extends React.Component 
{
  constructor()
  {
    super();
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
    this.selectedKeywords = new Set();
    this.handleEngineCheckboxes = this.handleEngineCheckboxes.bind(this);
    this.handleKeywordCheckboxes = this.handleKeywordCheckboxes.bind(this);

    this.eng = [];
    for (var i = 0; i < this.engines.length; i++) 
    {
        this.eng.push(<EngineSelector key={i} callback={this.handleEngineCheckboxes} engine={this.engines[i]}/>);
    }

    this.terms = [
      "react",
      "git",
      "python",
      "c++",
      "r programming language",
      "javascript",
      "c#",
      "embedded c",
      "latex",
      ".net core",
      "how to",
      "programming",
      "tutorial",
      "standard library",
    ];

    this.keywords = [];
    for (var j = 0; j < this.terms.length; j++) 
    {
        this.keywords.push(<KeywordSelector key={j} callback={this.handleKeywordCheckboxes} keyword={this.terms[j]}/>);
    }
  }

  focusSearchbar()
  {
    this.searchbar.current.focus();
  }

  handleEngineCheckboxes(engine)
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

  handleKeywordCheckboxes(engine)
  {
    if(this.selectedKeywords.has(engine))
    {
      this.selectedKeywords.delete(engine);
    }
    else
    {
      this.selectedKeywords.add(engine);
    }
  }

  handleKeyPress = (event) => 
  {
    if(event.key === 'Enter')
    {
      const searchterm = encodeURIComponent(this.keywordExtract(this.selectedKeywords)+document.getElementById("searchbar").value)
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

  keywordExtract(set)
  {
    var keywordString = "";
    for (let item of set)
    { 
      keywordString = keywordString + item + " ";
    }
    return keywordString;
  }

  render() 
  {
    return <div className="searchbox">
      <div className="carousel">
      {this.eng}
      </div>
      <input id="searchbar" type="search" onKeyPress={this.handleKeyPress} autoFocus/>
      <div className="carousel topmargin">
      {this.keywords}
      </div>
    </div>
  }
}

export default SearchBar;