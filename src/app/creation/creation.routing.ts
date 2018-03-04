import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreationComponent } from "./creation.component";
import { BindCallbackComponent } from "./bind-callback/bind-callback.component";
import { BindNodeCallbackComponent } from "./bind-node-callback/bind-node-callback.component";
import { CreateComponent } from "./create/create.component";
import { DeferComponent } from "./defer/defer.component";
import { EmptyComponent } from "./empty/empty.component";
import { FromComponent } from "./from/from.component";
import { FromEventComponent } from "./from-event/from-event.component";
import { FromEventPatternComponent } from "./from-event-pattern/from-event-pattern.component";
import { FromPromiseComponent } from "./from-promise/from-promise.component";
import { GenerateComponent } from "./generate/generate.component";
import { IntervalComponent } from "./interval/interval.component";
import { NeverComponent } from "./never/never.component";
import { OfComponent } from "./of/of.component";
import { RepeatComponent } from "./repeat/repeat.component";
import { RepeatWhenComponent } from "./repeat-when/repeat-when.component";
import { RangeComponent } from "./range/range.component";
import { ThrowComponent } from "./throw/throw.component";
import { TimerComponent } from "./timer/timer.component";

const childRoutes: any = [
    { path: "bindcallback", component: BindCallbackComponent },
    { path: "bindnodecallback", component: BindNodeCallbackComponent },
    { path: "create", component: CreateComponent },
    { path: "defer", component: DeferComponent },
    { path: "empty", component: EmptyComponent },
    { path: "from", component: FromComponent },
    { path: "fromevent", component: FromEventComponent },
    { path: "fromeventpattern", component: FromEventPatternComponent },
    { path: "frompromise", component: FromPromiseComponent },
    { path: "generate", component: GenerateComponent },
    { path: "interval", component: IntervalComponent },
    { path: "never", component: NeverComponent },
    { path: "of", component: OfComponent },
    { path: "repeat", component: RepeatComponent },
    { path: "repeatwhen", component: RepeatWhenComponent },
    { path: "range", component: RangeComponent },
    { path: "throw", component: ThrowComponent },
    { path: "timer", component: TimerComponent }
];

const routes: Routes = [
    { path: "main", component: CreationComponent, children: childRoutes }
];

export const creationRouting: ModuleWithProviders = RouterModule.forChild(routes);
