import React from 'react';
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    }
  }

  handleClick(e) {
    this.setState({value: this.props.turn});
    this.props.handleTurnChange(this.props.turn);
    this.props.updateSquares(this.props.index);
  }
  render() {
    return (
      <div className="square" onClick={this.handleClick.bind(this)}>{this.props.value}</div>
    )
  }
}

export default Square;
