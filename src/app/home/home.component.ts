import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Pug with Angular';

  foodies = ['Dosai', 'Pretzel', 'Burger', 'Pizza', 'Spaghetti', 'Chow Mein', 'Teriyaki Chicken', 'Kung Pao Chicken', 'Tasty Schnitzel'];

  constructor() { }

  ngOnInit(): void {
  }

}
