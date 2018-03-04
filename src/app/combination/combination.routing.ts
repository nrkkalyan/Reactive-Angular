import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CombinationComponent } from "./combination.component";
import { CombineAllComponent } from "./combine-all/combine-all.component";
import { CombineLatestComponent } from "./combine-latest/combine-latest.component";
import { ConcatComponent } from "./concat/concat.component";
import { ConcatAllComponent } from "./concat-all/concat-all.component";
import { ExhaustComponent } from "./exhaust/exhaust.component";
import { ForkJoinComponent } from "./fork-join/fork-join.component";
import { MergeComponent } from "./merge/merge.component";
import { MergeAllComponent } from "./merge-all/merge-all.component";
import { RaceComponent } from "./race/race.component";
import { StartWithComponent } from "./start-with/start-with.component";
import { SwitchComponent } from "./switch/switch.component";
import { WithLatestFromComponent } from "./with-latest-from/with-latest-from.component";
import { ZipComponent } from "./zip/zip.component";
import { ZipAllComponent } from "./zip-all/zip-all.component";

const childRoutes: Routes = [
    { path: "combineall", component: CombineAllComponent },
    { path: "combinelatest", component: CombineLatestComponent },
    { path: "concat", component: ConcatComponent },
    { path: "concatall", component: ConcatAllComponent },
    { path: "exhaust", component: ExhaustComponent },
    { path: "forkjoin", component: ForkJoinComponent },
    { path: "merge", component: MergeComponent },
    { path: "mergeall", component: MergeAllComponent },
    { path: "race", component: RaceComponent },
    { path: "startwith", component: StartWithComponent },
    { path: "switch", component: SwitchComponent },
    { path: "withlatestfrom", component: WithLatestFromComponent },
    { path: "zip", component: ZipComponent },
    { path: "zipall", component: ZipAllComponent }
];

const routes: Routes = [
    { path: "main", component: CombinationComponent, children: childRoutes }
];

export const combinationRouting: ModuleWithProviders = RouterModule.forChild(routes);
