import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MultiCastingComponent } from "./multi-casting.component";
import { CacheComponent } from "./cache/cache.component";
import { MultiCastComponent } from "./multi-cast/multi-cast.component";
import { PublishComponent } from "./publish/publish.component";
import { PublishBehaviorComponent } from "./publish-behavior/publish-behavior.component";
import { PublishLastComponent } from "./publish-last/publish-last.component";
import { PublishReplayComponent } from "./publish-replay/publish-replay.component";
import { ShareComponent } from "./share/share.component";

const childRoutes: any = [
    { path: 'cache', component: CacheComponent },
    { path: 'multicast', component: MultiCastComponent },
    { path: 'publish', component: PublishComponent },
    { path: 'publishbehavior', component: PublishBehaviorComponent },
    { path: 'publishlast', component: PublishLastComponent },
    { path: 'publishreplay', component: PublishReplayComponent },
    { path: 'share', component: ShareComponent }

];

const routes: Routes = [
    { path: "main", component: MultiCastingComponent, children: childRoutes }
];

export const multiCastingRouting: ModuleWithProviders = RouterModule.forChild(routes);
