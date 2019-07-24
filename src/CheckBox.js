import React from 'react';

class CheckBox extends React.Component 
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
    this.props.callback(this.props.callbackArg);
  };
  
  render() 
  {
    return <div className={this.state.checked ? "engineSelector checked" : "engineSelector"}>
      <label className="noselect">{this.props.labelText}
      <input type="checkbox" checked={this.state.checked} onChange={this.toggleChecked}></input>
      </label>
    </div>
  }
}

export default CheckBox;