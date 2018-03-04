import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { errorHandlingRouting } from "./error-handling.routing";
import { ErrorHandlingComponent } from "./error-handling.component";
import { CatchComponent } from './catch/catch.component';
import { RetryComponent } from './retry/retry.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';


@NgModule({
    imports: [CommonModule, RouterModule, errorHandlingRouting],
    declarations: [ErrorHandlingComponent, CatchComponent, RetryComponent, RetryWhenComponent]
})
export class ErrorHandlingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ErrorHandlingModule,
            providers: []
        };
    }
}
