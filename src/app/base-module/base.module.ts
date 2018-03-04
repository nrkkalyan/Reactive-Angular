import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
    imports: [CommonModule, TabsModule.forRoot()],
    declarations: [BaseComponent],
    exports: [BaseComponent]
})
export class BaseModule { }
