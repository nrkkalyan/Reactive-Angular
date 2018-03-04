import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { combinationRouting } from "./combination.routing";
import { CombinationComponent } from "./combination.component";
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { RaceComponent } from './race/race.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchComponent } from './switch/switch.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';
import { ZipAllComponent } from './zip-all/zip-all.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        combinationRouting
    ],
    declarations: [
        CombinationComponent,
        CombineAllComponent,
        CombineLatestComponent,
        ConcatComponent,
        ConcatAllComponent,
        ExhaustComponent,
        ForkJoinComponent,
        MergeComponent,
        MergeAllComponent,
        RaceComponent,
        StartWithComponent,
        SwitchComponent,
        WithLatestFromComponent,
        ZipComponent,
        ZipAllComponent
    ]
})
export class CombinationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CombinationModule,
            providers: []
        };
    }
}
