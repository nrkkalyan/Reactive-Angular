import { TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { BaseComponent } from "./base/base.component";

export abstract class OnBase {

    protected defination: string;
    protected signature: string;
    protected title: string;
    protected table: Array<IBaseTable>;

    public componentRef: ComponentRef<{}>;

    constructor(public target: ViewContainerRef, public componentFactoryResolver: ComponentFactoryResolver) {
        this.table = new Array<IBaseTable>();
    }


    public CreateComponent(exmTemplate: TemplateRef<any>, docTemplate: TemplateRef<any>): void {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BaseComponent);
        this.componentRef = this.target.createComponent(factory, 0);
        const instance: BaseComponent = this.componentRef.instance as BaseComponent;
        instance.title = this.title;
        instance.signature = this.signature;
        instance.defination = this.defination
        instance.template = exmTemplate;
        instance.doctemplate = docTemplate;
        instance.table = this.table;
    }
}


export interface IBaseTable {
    Name: string;
    Type: string;
    Attribute: string;
    Description: string;
}
