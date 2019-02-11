import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // Null fill an empty array
  squares = Array(9).fill(null);
  currentPlayer  = "X";
  winningPlayer = null;

  get currentStatus(){
    if(this.winningPlayer){
      return `Winner: ${this.winningPlayer}`;
      window.alert(`THE WINNER IS ${this.winningPlayer}`);
    }
    else {
      return `Player: ${this.currentPlayer}`;
    }
  }

  newGame(){
    // Null fill an empty array
    this.squares = Array(9).fill(null);
    this.currentPlayer  = "X";
    this.winningPlayer = null;
  }

  winCheck(): boolean {
    const combinations = [
      // Row winning combinations
      [0,1,2], [3,4,5], [6,7,8],
      // Column winning combinations
      [0,3,6],[1,4,7],[2,5,8],
      // Diagonal winning combinations
      [0,4,8],[2,4,6]
    ];
    for(let combo of combinations){
      if(this.squares[combo[0]] && this.squares[combo[0]] == this.squares[combo[1]] && this.squares[combo[0]] == this.squares[combo[2]]){
        return true;
      }
    }
    return false;
  }

  play(location){
    console.log(location);

    // When a square is clicked, show a character
    if(!this.winningPlayer && !this.squares[location]){
      this.squares[location] = this.currentPlayer;
      if(this.winCheck()){
        this.winningPlayer = this.currentPlayer;
      }
      if(this.currentPlayer == "X"){
        this.currentPlayer = "O";
      }
      else{
        this.currentPlayer = "X";
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
