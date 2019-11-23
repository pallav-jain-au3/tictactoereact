import React, { Component } from 'react';
import Board from './Board';
import  './Game.css'
import Status from './Status';


class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            history : [{squares: Array(9).fill(null)}],
            xisNext : true,
            steps: 0,
            gameEnded:false, 
            winner:null,
        }
    }
    handleClick(i){
        let history = this.state.history;
        let current = history[history.length - 1];
        let squares = current.squares.slice();
        
        if(calculateWinner(squares)  || squares[i] ){
            return
        }
        squares[i] = this.state.xisNext ? "X" : "O";
        this.setState(
            {
                history: history.concat([{
                    squares: squares
                  }]), 
                xisNext: !this.state.xisNext,
                steps: this.state.steps + 1, 
            }
        )
        let winner = calculateWinner(squares)
        if (winner){
            this.setState({winner : winner})
        }
        
        
    }

    render() { 
        let history = this.state.history;
        let current = history[history.length - 1];
        let status;
        if (this.state.winner || this.state.steps == 9){
            if (this.state.winner){
                status = "Winner is " + this.state.winner
            }
            else{
                status = "Draw"
            }
           
        }
        else{
            status = "Next Move is " + (this.state.xisNext ? "X": "O")
        }
        return (
           <div className= "game container">
           <div className = "game-info game-content text-center">
           <Status value = {status} />
           </div>
           <div className = "board game-content" squares = {current}>
            <Board squares = {current.squares} onClick = {(i) => this.handleClick(i)}/>
            </div>
            </div>
          );
    }
}

function calculateWinner(squares){
    const winningCombinations = [ [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]
    let winner  = null;
    winningCombinations.forEach(combination =>{
        let [sqA, sqB, sqC] = [squares[combination[0]], squares[combination[1]], squares[combination[2]]]
        
        if (sqA && sqA === sqB && sqB === sqC){
            winner = sqA;
        }

    })
    return winner;
    
}

 
export default Game;