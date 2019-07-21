import React from 'react';
import EngineSelector from './EngineSelector';

class SearchBar extends React.Component 
{
  constructor()
  {
    super();
    this.engines=[
        {name:"DuckDuckGo", url:"https://duckduckgo.com/?q="},
        {name:"Google", url:"https://www.google.it/search?q="},
        {name:"Google Images", url:"https://www.google.com/search?&tbm=isch&q="},
        {name:"YouTube", url:"https://www.youtube.com/results?search_query="},
      ];
    this.currentEngines = new Set([{name:"DuckDuckGo", url:"https://duckduckgo.com/?q="}]);

    this.handleCheckboxes = this.handleCheckboxes.bind(this);
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
      for (let item of this.currentEngines)
      {
        window.open(item.url+document.getElementById("searchbar").value);
      }
    }
  }


  render() 
  {
    return <div className="searchbox">
      <div className="carousel">
      <EngineSelector callback={this.handleCheckboxes} engine={this.engines[0]} checked={true}/>
      <EngineSelector callback={this.handleCheckboxes} engine={this.engines[1]}/>
      <EngineSelector callback={this.handleCheckboxes} engine={this.engines[2]}/>
      <EngineSelector callback={this.handleCheckboxes} engine={this.engines[3]}/>
      </div>
      <input id="searchbar" type="search" onKeyPress={this.handleKeyPress} autoFocus/>
    </div>
  }
}

export default SearchBar;