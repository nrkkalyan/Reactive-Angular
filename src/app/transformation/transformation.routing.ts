import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransformationComponent } from "./transformation.component";
import { BufferComponent } from "./buffer/buffer.component";
import { BufferCountComponent } from "./buffer-count/buffer-count.component";
import { BufferTimeComponent } from "./buffer-time/buffer-time.component";
import { BufferToggleComponent } from "./buffer-toggle/buffer-toggle.component";
import { BufferWhenComponent } from "./buffer-when/buffer-when.component";
import { ConcatMapComponent } from "./concat-map/concat-map.component";
import { ConcatMapToComponent } from "./concat-map-to/concat-map-to.component";
import { ExhaustMapComponent } from "./exhaust-map/exhaust-map.component";
import { ExpandComponent } from "./expand/expand.component";
import { GroupByComponent } from "./group-by/group-by.component";
import { MapComponent } from "./map/map.component";
import { MapToComponent } from "./map-to/map-to.component";
import { MergeMapComponent } from "./merge-map/merge-map.component";
import { MergeMapToComponent } from "./merge-map-to/merge-map-to.component";
import { MergeScanComponent } from "./merge-scan/merge-scan.component";
import { PairwiseComponent } from "./pairwise/pairwise.component";
import { PartitionComponent } from "./partition/partition.component";
import { PluckComponent } from "./pluck/pluck.component";
import { ScanComponent } from "./scan/scan.component";
import { SwitchMapComponent } from "./switch-map/switch-map.component";
import { SwitchMapToComponent } from "./switch-map-to/switch-map-to.component";
import { WindowComponent } from "./window/window.component";
import { WindowCountComponent } from "./window-count/window-count.component";
import { WindowTimeComponent } from "./window-time/window-time.component";
import { WindowToggleComponent } from "./window-toggle/window-toggle.component";
import { WindowWhenComponent } from "./window-when/window-when.component";

const childRoutes: any = [
    { path: 'buffer', component: BufferComponent },
    { path: 'buffercount', component: BufferCountComponent },
    { path: 'buffertime', component: BufferTimeComponent },
    { path: 'buffertoggle', component: BufferToggleComponent },
    { path: 'bufferwhen', component: BufferWhenComponent },
    { path: 'concatmap', component: ConcatMapComponent },
    { path: 'concatmapto', component: ConcatMapToComponent },
    { path: 'exhaustmap', component: ExhaustMapComponent },
    { path: 'expand', component: ExpandComponent },
    { path: 'groupby', component: GroupByComponent },
    { path: 'map', component: MapComponent },
    { path: 'mapto', component: MapToComponent },
    { path: 'mergemap', component: MergeMapComponent },
    { path: 'mergemapto', component: MergeMapToComponent },
    { path: 'mergescan', component: MergeScanComponent },
    { path: 'pairwise', component: PairwiseComponent },
    { path: 'partition', component: PartitionComponent },
    { path: 'pluck', component: PluckComponent },
    { path: 'scan', component: ScanComponent },
    { path: 'switchmap', component: SwitchMapComponent },
    { path: 'switchmapto', component: SwitchMapToComponent },
    { path: 'window', component: WindowComponent },
    { path: 'windowcount', component: WindowCountComponent },
    { path: 'windowtime', component: WindowTimeComponent },
    { path: 'windowtoggle', component: WindowToggleComponent },
    { path: 'windowwhen', component: WindowWhenComponent }

];

const routes: Routes = [
    { path: "main", component: TransformationComponent, children: childRoutes }
];

export const transformationRouting: ModuleWithProviders = RouterModule.forChild(routes);
