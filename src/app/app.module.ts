import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy
} from "@angular/common";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { CardsComponent } from "./cards/cards.component";
import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";

import { CombinationModule } from "./combination/combination.module";
import { CreationModule } from "./creation/creation.module";
import { ConditionalBooleanModule } from "./conditional-boolean/conditional-boolean.module";
import { FilteringModule } from "./filtering/filtering.module";
import { MathematicAggregateModule } from "./mathematic-aggregate/mathematic-aggregate.module";
import { MultiCastingModule } from "./multi-casting/multi-casting.module";
import { ErrorHandlingModule } from "./error-handling/error-handling.module";
import { TransformationModule } from "./transformation/transformation.module";
import { UtilityModule } from "./utility/utility.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    TabsModule.forRoot(),
    LayoutModule,
    CreationModule,
    TransformationModule,
    FilteringModule,
    CombinationModule,
    MultiCastingModule,
    ErrorHandlingModule,
    UtilityModule,
    ConditionalBooleanModule,
    MathematicAggregateModule,
    routing
  ],
  declarations: [AppComponent, CardsComponent],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
