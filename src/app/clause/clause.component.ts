import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clause',
  template: `<p class="class-p">This is inline template</p>`,
  styleUrls: ['./clause.component.scss']
})
export class ClauseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
