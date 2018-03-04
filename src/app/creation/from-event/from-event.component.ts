// tslint:disable-next-line:max-line-length
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { OnBase } from '../../base-module/base.abstract';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent extends OnBase implements OnInit {

  @ViewChild('estimateTemplate') estimateTemplate: TemplateRef<any>;
  @ViewChild('estimateTemplate1') estimateTemplate1: TemplateRef<any>;

  constructor(target: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver) {
    super(target, componentFactoryResolver)
    this.title = "fromEvent"
    // tslint:disable-next-line:max-line-length
    this.signature = "public static fromEvent(target: EventTargetLike, eventName: string, options: EventListenerOptions, selector: SelectorMethodSignature<T>): Observable<T>";
    this.defination = "Creates an Observable from DOM events, or Node.js EventEmitter events or others.";
    this.table = [
      // tslint:disable-next-line:max-line-length
      { Name: 'target', Type: 'EventTargetLike', Attribute: '', Description: 'The DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.' },
      { Name: 'eventName', Type: 'string', Attribute: '', Description: 'The event name of interest, being emitted by the target.' },
      { Name: 'options', Type: 'EventListenerOptions', Attribute: 'optional', Description: 'Options to pass through to addEventListener' },
      // tslint:disable-next-line:max-line-length
      { Name: 'selector', Type: 'SelectorMethodSignature<T>', Attribute: 'optional', Description: 'An optional function to post-process results. It takes the arguments from the event handler and should return a single value.' }
    ];
  }

  ngOnInit() {
    super.CreateComponent(this.estimateTemplate, this.estimateTemplate1);
  }
}
