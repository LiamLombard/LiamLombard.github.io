import React from 'react';

class EngineSelector extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      checked: this.props.checked,
    }
  }

  toggleChecked = () => {
    this.setState(state => ({ checked: !state.checked }));
    this.props.callback(this.props.engine);
  };

  render() 
  {
    return <div className="engineSelector">
      <label>{this.props.engine.name}</label>
      <input className="engineSelector" type="checkbox" engine={this.props.engine} checked={this.state.checked} onClick={this.toggleChecked}></input>
    </div>
  }
}

export default EngineSelector;