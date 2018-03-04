import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardsComponent } from "./cards/cards.component";

const routes: Routes = [
  { path: "creation", loadChildren: "./creation/creation.module#CreationModule" },
  { path: "transformation", loadChildren: "./transformation/transformation.module#TransformationModule" },
  { path: "filtering", loadChildren: "./filtering/filtering.module#FilteringModule" },
  { path: "combination", loadChildren: "./combination/combination.module#CombinationModule" },
  { path: "multicasting", loadChildren: "./multi-casting/multi-casting.module#MultiCastingModule" },
  { path: "errorhandling", loadChildren: "./error-handling/error-handling.module#ErrorHandlingModule" },
  { path: "utility", loadChildren: "./utility/utility.module#UtilityModule" },
  { path: "conditional", loadChildren: "./conditional-boolean/conditional-boolean.module#ConditionalBooleanModule" },
  { path: "mathematical", loadChildren: "./mathematic-aggregate/mathematic-aggregate.module#MathematicAggregateModule" },
  { path: "cards", component: CardsComponent },
  { path: "", redirectTo: "/cards", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
