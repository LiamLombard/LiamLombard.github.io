import React from 'react';
import EngineSelector from './EngineSelector';
import KeywordSelector from './KeywordSelector';

class SearchBar extends React.Component 
{
  constructor()
  {
    super();
    this.currentEngines = new Set();
    this.selectedKeywords = new Set();

    this.handleKeywordCheckboxes = this.handleKeywordCheckboxes.bind(this);
    this.handleEngineCheckboxes = this.handleEngineCheckboxes.bind(this);

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
          if(item.prefix === "http://" || item.prefix === "https://")
          {
            window.location.href = item.prefix + document.getElementById("searchbar").value;
          }
          else
          {
            window.open("https://duckduckgo.com/?q="+item.prefix+" "+searchterm, (this.currentEngines.size === 1) ? "_self": "_blank");
          }
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
      <EngineSelector callback={this.handleEngineCheckboxes} />
      <div className="inputcontainer">
        <input id="searchbar" type="search" onKeyPress={this.handleKeyPress} autoFocus/>
      </div>
      <KeywordSelector callback={this.handleKeywordCheckboxes} />
    </div>
  }
}

export default SearchBar;