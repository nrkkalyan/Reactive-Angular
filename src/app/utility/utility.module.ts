import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UtilityComponent } from "./utility.component";
import { utilityRouting } from "./utility.routing";
import { DoComponent } from './do/do.component';
import { DelayComponent } from './delay/delay.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DematerializeComponent } from './dematerialize/dematerialize.component';
import { MaterializeComponent } from './materialize/materialize.component';
import { ObserveOnComponent } from './observe-on/observe-on.component';
import { SubscribeOnComponent } from './subscribe-on/subscribe-on.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ToPromiseComponent } from './to-promise/to-promise.component';

@NgModule({
    imports: [CommonModule, RouterModule, utilityRouting],
    declarations: [UtilityComponent, DoComponent, DelayComponent, DelayWhenComponent, DematerializeComponent, MaterializeComponent, ObserveOnComponent, SubscribeOnComponent, TimeIntervalComponent, TimestampComponent, TimeoutComponent, TimeoutWithComponent, ToArrayComponent, ToPromiseComponent]
})
export class UtilityModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilityModule,
            providers: []
        };
    }
}
