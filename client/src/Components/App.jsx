import React from 'React';
import Square from './Square.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      turn : 'A',
    }
  }
  componentDidUpdate() {
    this.checkWinner();
  }
  checkWinner() {
    this.checkWinnerHorizontly();
    this.checkWinnerVertically();
    this.checkWinnerDiagnally();
  }
  checkWinnerHorizontly() {
    let first = this.state.squares.slice(0,3);
    let second = this.state.squares.slice(3,6);
    let third = this.state.squares.slice(6,9);
    if(first.join('') === "AAA" || second.join('') === "AAA" || third.join('') === "AAA") {
      alert("A win!!");
    } else if(first.join('') === "BBB" || second.join('') === "BBB" || third.join('') === "BBB") {
      alert("B win!");
    }
  }
  reStart() {
    this.setState({squares:Array(9).fill(null)});
    this.setState({turn:"A"});

    for(let i = 0; i < this.state.squares.length;i++) {
      this.renderSquare(i)
    }
  }

  checkWinnerVertically() {
    let first = [this.state.squares[0],this.state.squares[4],this.state.squares[8]];
    let second = [this.state.squares[2],this.state.squares[4],this.state.squares[6]];
    if(first.join('') === "AAA" || second.join('') === "AAA") {
      alert("A win!!");
    } else if(first.join('') === "BBB" || second.join('') === "BBB") {
      alert("B win!");
    }
  }
  checkWinnerDiagnally() {
    let first = [this.state.squares[0],this.state.squares[3],this.state.squares[6]];
    let second = [this.state.squares[1],this.state.squares[4],this.state.squares[7]];
    let third = [this.state.squares[2],this.state.squares[5],this.state.squares[8]];
    if(first.join('') === "AAA" || second.join('') === "AAA" || third.join('') === "AAA") {
      alert("A win!!");
    } else if(first.join('') === "BBB" || second.join('') === "BBB" || third.join('') === "BBB") {
      alert("B win!");
    }
  }
  handleTurnChange(val) {
    if(this.state.turn === 'A') {
      this.setState({turn:"B"});
    } else {
      this.setState({turn:"A"});
    }
  }

  updateSquares(i) {
    let newArr = this.state.squares.slice(0);
    if(this.state.turn === 'A') {
      newArr.splice(i,1,"A");
      this.setState({squares:newArr});
    } else {
      newArr.splice(i,1,"B");
      this.setState({squares:newArr});
    }
  }

  renderSquare(i) {
    return <Square index={i} turn={this.state.turn} updateSquares={this.updateSquares.bind(this)}handleTurnChange={this.handleTurnChange.bind(this)} value={this.state.squares[i]} />
  }

  render() {
    return (
      <div>
        <div>{this.state.turn}'s Turn</div>
        <button onClick ={this.reStart.bind(this)}>ReStart</button>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          <div className="clear"></div>
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          <div className="clear"></div>
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          <div className="clear"></div>
        </div>
      </div>
    )
  }

};

export default App;
