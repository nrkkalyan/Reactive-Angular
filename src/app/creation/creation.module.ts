import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { creationRouting } from "./creation.routing";
import { CreationComponent } from "./creation.component";
import { BindCallbackComponent } from './bind-callback/bind-callback.component';
import { BindNodeCallbackComponent } from './bind-node-callback/bind-node-callback.component';
import { CreateComponent } from './create/create.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromEventPatternComponent } from './from-event-pattern/from-event-pattern.component';
import { FromPromiseComponent } from './from-promise/from-promise.component';
import { GenerateComponent } from './generate/generate.component';
import { IntervalComponent } from './interval/interval.component';
import { NeverComponent } from './never/never.component';
import { OfComponent } from './of/of.component';
import { RepeatComponent } from './repeat/repeat.component';
import { RepeatWhenComponent } from './repeat-when/repeat-when.component';
import { RangeComponent } from './range/range.component';
import { ThrowComponent } from './throw/throw.component';
import { TimerComponent } from './timer/timer.component';

import { TabsModule } from "ngx-bootstrap";
import { BaseComponent } from "../base-module/base/base.component";
import { BaseModule } from "../base-module/base.module";


@NgModule({
    imports: [CommonModule, RouterModule, TabsModule.forRoot(), BaseModule, creationRouting],
    declarations: [
        CreationComponent,
        BindCallbackComponent,
        BindNodeCallbackComponent,
        CreateComponent,
        DeferComponent,
        EmptyComponent,
        FromComponent,
        FromEventComponent,
        FromEventPatternComponent,
        FromPromiseComponent,
        GenerateComponent,
        IntervalComponent,
        NeverComponent,
        OfComponent,
        RepeatComponent,
        RepeatWhenComponent,
        RangeComponent,
        ThrowComponent,
        TimerComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [BaseComponent]
})
export class CreationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CreationModule,
            providers: []
        };
    }
}
