import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() defination: string;
  @Input() signature: string;
  @Input() title: string;
  @Input() template: TemplateRef<any>;
  @Input() doctemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
