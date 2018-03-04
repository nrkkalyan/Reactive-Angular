import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { conditionalRouting } from "./conditional-boolean.routing";
import { ConditionalBooleanComponent } from "./conditional-boolean.component";
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { FindComponent } from './find/find.component';
import { FindIndexComponent } from './find-index/find-index.component';
import { IsEmptyComponent } from './is-empty/is-empty.component';

@NgModule({
    imports: [CommonModule, RouterModule, conditionalRouting],
    declarations: [ConditionalBooleanComponent, DefaultIfEmptyComponent, EveryComponent, FindComponent, FindIndexComponent, IsEmptyComponent]
})
export class ConditionalBooleanModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ConditionalBooleanModule,
            providers: []
        };
    }
}

