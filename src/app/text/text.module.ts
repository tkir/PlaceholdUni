import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {TextComponent} from './text.component';
import {TextRoutingModule} from './text-routing.module';

@NgModule({
    imports: [
        SharedModule,
        TextRoutingModule
    ],
    declarations: [
        TextComponent
    ]
})
export class TextModule {
}
