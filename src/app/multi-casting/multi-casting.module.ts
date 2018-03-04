import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MultiCastingComponent } from "./multi-casting.component";
import { multiCastingRouting } from "./multi-casting.routing";
import { CacheComponent } from './cache/cache.component';
import { MultiCastComponent } from './multi-cast/multi-cast.component';
import { PublishComponent } from './publish/publish.component';
import { PublishBehaviorComponent } from './publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './publish-last/publish-last.component';
import { PublishReplayComponent } from './publish-replay/publish-replay.component';
import { ShareComponent } from './share/share.component';

@NgModule({
    imports: [CommonModule, RouterModule, multiCastingRouting],
    declarations: [MultiCastingComponent, CacheComponent, MultiCastComponent, PublishComponent, PublishBehaviorComponent, PublishLastComponent, PublishReplayComponent, ShareComponent]
})
export class MultiCastingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MultiCastingModule,
            providers: []
        };
    }
}
