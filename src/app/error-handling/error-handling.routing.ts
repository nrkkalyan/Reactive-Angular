import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorHandlingComponent } from "./error-handling.component";
import { CatchComponent } from "./catch/catch.component";
import { RetryComponent } from "./retry/retry.component";
import { RetryWhenComponent } from "./retry-when/retry-when.component";

const childRoutes: any = [
    { path: "catch", component: CatchComponent },
    { path: "retry", component: RetryComponent },
    { path: "retrywhen", component: RetryWhenComponent }
];

const routes: Routes = [
    { path: "main", component: ErrorHandlingComponent, children: childRoutes }
];

export const errorHandlingRouting: ModuleWithProviders = RouterModule.forChild(routes);
