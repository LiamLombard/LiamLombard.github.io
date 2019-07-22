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
    return <div className={this.state.checked ? "engineSelector checked" : "engineSelector"}>
      <label className="noselect">{this.props.engine.name}
      <input className="engineSelector" type="checkbox" checked={this.state.checked} onClick={this.toggleChecked}></input>
      </label>
    </div>
  }
}

export default EngineSelector;