import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  // tslint:disable-next-line
  selector: "body",
  template: "<app-layout></app-layout>"
  // template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
