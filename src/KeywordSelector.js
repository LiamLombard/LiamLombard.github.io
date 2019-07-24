import React from 'react';
import CheckBox from './CheckBox';
class KeywordSelector extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.handleCheckboxes = this.handleCheckboxes.bind(this);

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
      "vscode",
    ];

    this.keywords = [];
    for (var j = 0; j < this.terms.length; j++) 
    {
        this.keywords.push(<CheckBox  key={j} 
                                      callback={this.handleCheckboxes} 
                                      callbackArg={this.terms[j]}
                                      labelText={this.terms[j]}
                                      cssClass="keywordSelector"
                                      />);
    }
  }

  handleCheckboxes(keyword)
  {
    this.props.callback(keyword);
  }

  render() 
  {
    return  <div className="carousel topmargin">
              {this.keywords}
            </div>
  }
}

export default KeywordSelector;