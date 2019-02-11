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


  play(location){
    console.log(location);

    // When a square is clicked, show a character
    if(!this.squares[location]){
      this.squares[location] = this.currentPlayer;
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
