import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MathematicAggregateComponent } from "./mathematic-aggregate.component";
import { CountComponent } from "./count/count.component";
import { MaxComponent } from "./max/max.component";
import { MinComponent } from "./min/min.component";
import { ReduceComponent } from "./reduce/reduce.component";

const childRoutes: any = [
    { path: 'count', component: CountComponent },
    { path: 'max', component: MaxComponent },
    { path: 'min', component: MinComponent },
    { path: 'reduce', component: ReduceComponent }
];

const routes: Routes = [
    { path: "main", component: MathematicAggregateComponent, children: childRoutes }
];

export const mathematicRouting: ModuleWithProviders = RouterModule.forChild(routes);
