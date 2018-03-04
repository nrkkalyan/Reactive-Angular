import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UtilityComponent } from "./utility.component";
import { DoComponent } from "./do/do.component";
import { DelayComponent } from "./delay/delay.component";
import { DelayWhenComponent } from "./delay-when/delay-when.component";
import { DematerializeComponent } from "./dematerialize/dematerialize.component";
import { MaterializeComponent } from "./materialize/materialize.component";
import { ObserveOnComponent } from "./observe-on/observe-on.component";
import { SubscribeOnComponent } from "./subscribe-on/subscribe-on.component";
import { TimeIntervalComponent } from "./time-interval/time-interval.component";
import { TimestampComponent } from "./timestamp/timestamp.component";
import { TimeoutComponent } from "./timeout/timeout.component";
import { TimeoutWithComponent } from "./timeout-with/timeout-with.component";
import { ToArrayComponent } from "./to-array/to-array.component";
import { ToPromiseComponent } from "./to-promise/to-promise.component";

const childRoutes: any = [
    { path: 'do', component: DoComponent },
    { path: 'delay', component: DelayComponent },
    { path: 'delaywhen', component: DelayWhenComponent },
    { path: 'dematerialize', component: DematerializeComponent },
    { path: 'materialize', component: MaterializeComponent },
    { path: 'observeon', component: ObserveOnComponent },
    { path: 'subscribeon', component: SubscribeOnComponent },
    { path: 'timeinterval', component: TimeIntervalComponent },
    { path: 'timestamp', component: TimestampComponent },
    { path: 'timeout', component: TimeoutComponent },
    { path: 'timeoutwith', component: TimeoutWithComponent },
    { path: 'toarray', component: ToArrayComponent },
    { path: 'topromise', component: ToPromiseComponent }
];

const routes: Routes = [
    { path: "main", component: UtilityComponent, children: childRoutes }
];

export const utilityRouting: ModuleWithProviders = RouterModule.forChild(routes);
