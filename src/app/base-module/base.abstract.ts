import { TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { BaseComponent } from "./base/base.component";

export abstract class OnBase {

    protected defination: string;
    protected signature: string;
    protected title: string;

    public componentRef: ComponentRef<{}>;

    constructor(public target: ViewContainerRef, public componentFactoryResolver: ComponentFactoryResolver) { }


    public CreateComponent(exmTemplate: TemplateRef<any>, docTemplate: TemplateRef<any>): void {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BaseComponent);
        this.componentRef = this.target.createComponent(factory, 0);
        const instance: BaseComponent = this.componentRef.instance as BaseComponent;
        instance.title = this.title;
        instance.signature = this.signature;
        instance.defination = this.defination
        instance.template = exmTemplate;
        instance.doctemplate = docTemplate;
    }



}
