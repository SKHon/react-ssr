import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: '默认1'
    }
    this.change = this.change.bind(this);
  }

  change(e) {
    alert( e.target.value)
    this.setState({
      mytext: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.mytext}</h2>
        <input value={this.state.mytext} onChange={this.change}></input>
      </div>
    )
  }
}

export default Demo;
