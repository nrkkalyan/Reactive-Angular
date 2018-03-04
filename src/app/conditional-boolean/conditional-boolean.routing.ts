import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConditionalBooleanComponent } from "./conditional-boolean.component";
import { DefaultIfEmptyComponent } from "./default-if-empty/default-if-empty.component";
import { EveryComponent } from "./every/every.component";
import { FindComponent } from "./find/find.component";
import { FindIndexComponent } from "./find-index/find-index.component";
import { IsEmptyComponent } from "./is-empty/is-empty.component";

const childRoutes: any = [
    { path: "defaultifempty", component: DefaultIfEmptyComponent },
    { path: "every", component: EveryComponent },
    { path: "find", component: FindComponent },
    { path: "findindex", component: FindIndexComponent },
    { path: "isempty", component: IsEmptyComponent }
];

const routes: Routes = [
    { path: "main", component: ConditionalBooleanComponent, children: childRoutes }
];

export const conditionalRouting: ModuleWithProviders = RouterModule.forChild(routes);
