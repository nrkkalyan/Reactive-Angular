// tslint:disable-next-line:max-line-length
import { Component, OnInit, ElementRef, Renderer2, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { OnBase } from '../../base-module/base.abstract';
import { BaseComponent } from '../../base-module/base/base.component';



@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  private componentRef: ComponentRef<{}>;
  private templateRef: TemplateRef<{}>;
  @ViewChild('estimateTemplate')
  private estimateTemplate: TemplateRef<any>;

  @ViewChild('estimateTemplate1')
  private estimateTemplate1: TemplateRef<any>;

  constructor(private target: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(BaseComponent);
    this.componentRef = this.target.createComponent(factory, 0);
    const instance: BaseComponent = this.componentRef.instance as BaseComponent;
    instance.title = "fromEvent";
    // tslint:disable-next-line:max-line-length
    instance.signature = "public static fromEvent(target: EventTargetLike, eventName: string, options: EventListenerOptions, selector: SelectorMethodSignature<T>): Observable<T>";
    instance.defination = 'Creates an Observable from DOM events, or Node.js EventEmitter events or others.';
    instance.template = this.estimateTemplate;
    instance.doctemplate = this.estimateTemplate1;

  }
}
