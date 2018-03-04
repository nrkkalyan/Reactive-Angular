import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilteringComponent } from "./filtering.component";
import { DebounceComponent } from "./debounce/debounce.component";
import { DebounceTimeComponent } from "./debounce-time/debounce-time.component";
import { DistinctComponent } from "./distinct/distinct.component";
import { DistinctKeyComponent } from "./distinct-key/distinct-key.component";
import { DistinctUntilChangedComponent } from "./distinct-until-changed/distinct-until-changed.component";
import { DistinctUntilKeyChangedComponent } from "./distinct-until-key-changed/distinct-until-key-changed.component";
import { ElementAtComponent } from "./element-at/element-at.component";
import { FilterComponent } from "./filter/filter.component";
import { FirstComponent } from "./first/first.component";
import { IgnoreElementsComponent } from "./ignore-elements/ignore-elements.component";
import { AuditComponent } from "./audit/audit.component";
import { AuditTimeComponent } from "./audit-time/audit-time.component";
import { LastComponent } from "./last/last.component";
import { SampleComponent } from "./sample/sample.component";
import { SampleTimeComponent } from "./sample-time/sample-time.component";
import { SingleComponent } from "./single/single.component";
import { SkipComponent } from "./skip/skip.component";
import { SkipLastComponent } from "./skip-last/skip-last.component";
import { SkipUntilComponent } from "./skip-until/skip-until.component";
import { SkipWhileComponent } from "./skip-while/skip-while.component";
import { TakeComponent } from "./take/take.component";
import { TakeLastComponent } from "./take-last/take-last.component";
import { TakeUntilComponent } from "./take-until/take-until.component";
import { TakeWhileComponent } from "./take-while/take-while.component";
import { ThrottleComponent } from "./throttle/throttle.component";
import { ThrottleTimeComponent } from "./throttle-time/throttle-time.component";

const childRoutes: any = [
    { path: 'debounce', component: DebounceComponent },
    { path: 'debouncetime', component: DebounceTimeComponent },
    { path: 'distinct', component: DistinctComponent },
    { path: 'distinctkey', component: DistinctKeyComponent },
    { path: 'distinctuntilchanged', component: DistinctUntilChangedComponent },
    { path: 'distinctuntilkeychanged', component: DistinctUntilKeyChangedComponent },
    { path: 'elementat', component: ElementAtComponent },
    { path: 'filter', component: FilterComponent },
    { path: 'first', component: FirstComponent },
    { path: 'ignoreelements', component: IgnoreElementsComponent },
    { path: 'audit', component: AuditComponent },
    { path: 'audittime', component: AuditTimeComponent },
    { path: 'last', component: LastComponent },
    { path: 'sample', component: SampleComponent },
    { path: 'sampletime', component: SampleTimeComponent },
    { path: 'single', component: SingleComponent },
    { path: 'skip', component: SkipComponent },
    { path: 'skiplast', component: SkipLastComponent },
    { path: 'skipuntil', component: SkipUntilComponent },
    { path: 'skipwhile', component: SkipWhileComponent },
    { path: 'take', component: TakeComponent },
    { path: 'takelast', component: TakeLastComponent },
    { path: 'takeuntil', component: TakeUntilComponent },
    { path: 'takewhile', component: TakeWhileComponent },
    { path: 'throttle', component: ThrottleComponent },
    { path: 'throttletime', component: ThrottleTimeComponent }

];

const routes: Routes = [
    { path: "main", component: FilteringComponent, children: childRoutes }
];

export const filteringRouting: ModuleWithProviders = RouterModule.forChild(routes);
