import React from 'react';
import EngineSelector from './EngineSelector';

class SearchBar extends React.Component 
{
  constructor()
  {
    super();
    this.engines=[
        {name:"Google", prefix:"!g"},
        {name:"Google Images", prefix:"!gi"},
        {name:"YouTube", prefix:"!yt"},
        {name:"MDN", prefix:"!mdn"},
        {name:"Stack Overflow", prefix:"!so"},
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
      if(this.currentEngines.size === 0)
      {
        window.open("https://duckduckgo.com/?q="+document.getElementById("searchbar").value, "_self");
      }
      else
      {
        for (let item of this.orderSet(this.currentEngines))
        {
          window.open("https://duckduckgo.com/?q="+item.prefix+" "+document.getElementById("searchbar").value, (this.currentEngines.size === 1) ? "_self": "_blank");
        }
        window.open("https://duckduckgo.com/?q="+document.getElementById("searchbar").value, "_self");
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