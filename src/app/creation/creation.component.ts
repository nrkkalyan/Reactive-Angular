import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  toggle: boolean;
  constructor() {
    this.toggle = true;
  }

  ngOnInit() {
  }

}
