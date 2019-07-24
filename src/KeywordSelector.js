import React from 'react';

class KeywordSelector extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      checked: this.props.checked,
    }

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked = () => {
    this.setState(state => ({ checked: !state.checked }));
    this.props.callback(this.props.keyword);
  };

  render() 
  {
    return <div className={this.state.checked ? "keywordSelector checked" : "keywordSelector"}>
      <label className="noselect">{this.props.keyword}
      <input type="checkbox" checked={this.state.checked} onChange={this.toggleChecked}></input>
      </label>
    </div>
  }
}

export default KeywordSelector;