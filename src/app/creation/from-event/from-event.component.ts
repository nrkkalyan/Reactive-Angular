// tslint:disable-next-line:max-line-length
import { Component, OnInit, ElementRef, Renderer2, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { OnBase } from '../../shared/base.abstract';
import { TabsetComponent, TabDirective, TabHeadingDirective } from 'ngx-bootstrap';



@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent extends OnBase implements OnInit {
  private componentRef: ComponentRef<{}>;
  // @ViewChild('div', { read: ViewContainerRef })
  // private target: ViewContainerRef;

  // tslint:disable-next-line:max-line-length
  constructor(private target: ViewContainerRef, private cdRef: ChangeDetectorRef, private el: ElementRef, private renderer: Renderer2, private componentFactoryResolver: ComponentFactoryResolver) {
    super();

  }

  ngOnInit() {
    this.title = "fromEvent";
    // tslint:disable-next-line:max-line-length
    this.signature = 'public static fromEvent(target: EventTargetLike, eventName: string, options: EventListenerOptions, selector: SelectorMethodSignature<T>): Observable<T>';
    this.defination = 'Creates an Observable from DOM events, or Node.js EventEmitter events or others.';
    const nativeElement: HTMLElement = this.el.nativeElement;

    const h5 = this.renderer.createElement('h5');
    const span = this.renderer.createElement('span');

    const spanText = this.renderer.createText("Operator: ");
    const h5Text = this.renderer.createText(this.title);

    this.renderer.appendChild(span, spanText);
    this.renderer.appendChild(h5, span);
    this.renderer.appendChild(h5, h5Text);

    const hr = this.renderer.createElement('hr');

    const rowDiv = this.renderer.createElement('div');
    this.renderer.addClass(rowDiv, 'row');

    const colDiv = this.renderer.createElement('div');
    this.renderer.addClass(colDiv, 'col-md-12');
    this.renderer.addClass(colDiv, 'mb-12');


    const factory = this.componentFactoryResolver.resolveComponentFactory(TabsetComponent);
    // this.componentRef = <ElementRef>(colDiv) .createComponent(factory, 0);
    // // this.componentRef.instance['tab'] = [{ title: 'Header', content: 'Hi' }];
    // const instance: TabsetComponent = this.componentRef.instance as TabsetComponent;
    // const tabconfig = { elementRef: this.el, id: 'a', renderer: this.renderer, heading: "tabz.title", active: true }
    // const tab = instance..addTab(tabconfig);

    // tslint:disable-next-line:max-line-length
    // instance.tabs. = [{
    //   tabset: instance, heading: 'Test', elementRef: this.el, renderer: this.renderer, id: 'abc', disabled: false,
    //   removable: false, customClass: '', active: true, select: null, deselect: null, removed: null, addClass: false, headingRef: null
    //   , _active: true, _customClass: '', ngOnInit: null, ngOnDestroy: null
    // }];

    // this.componentRef.instance['title'] = 'Header';


    // this.componentRef = this.container.createComponent(factory);





    const tabset = this.renderer.createElement(factory.selector);

    // const exampleTabs = this.renderer.createElement('tab');
    // this.renderer.setAttribute(exampleTabs, 'heading', 'Example');

    // this.renderer.appendChild(tabset, exampleTabs);
    this.renderer.appendChild(colDiv, tabset);
    this.cdRef.detectChanges();
    this.renderer.appendChild(rowDiv, colDiv);

    this.renderer.appendChild(nativeElement, h5);
    this.renderer.appendChild(nativeElement, hr);
    this.renderer.appendChild(nativeElement, rowDiv);

  }

  public base(): string {
    return super.base() + "World";
  }
}


