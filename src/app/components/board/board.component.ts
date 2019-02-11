import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // Null fill an empty array
  squares = Array(9).fill(null);


  play(location){
    console.log(location);

    // When a square is clicked, show an X
    this.squares[location] = "X";
  }

  constructor() { }

  ngOnInit() {
  }

}
