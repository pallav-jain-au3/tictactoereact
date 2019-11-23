import React, { Component } from 'react';
import Square from './Square';
import './Status';


class Board extends Component {

   

    renderSquare(i){
        return <Square onClick = {() =>this.props.onClick(i)}  value = {this.props.squares[i]}/>
    } 
    render() {    
        return (
            
            <div className = "board text-center">           
            <div className = "row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className = "row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className = "row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
            </div>
          );
    }
}
 
export default Board;
