
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { mathematicRouting } from "./mathematic-aggregate.routing";
import { MathematicAggregateComponent } from "./mathematic-aggregate.component";
import { CountComponent } from './count/count.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { ReduceComponent } from './reduce/reduce.component';

@NgModule({
    imports: [CommonModule, RouterModule, mathematicRouting],
    declarations: [MathematicAggregateComponent, CountComponent, MaxComponent, MinComponent, ReduceComponent]
})
export class MathematicAggregateModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MathematicAggregateModule,
            providers: []
        };
    }
}
