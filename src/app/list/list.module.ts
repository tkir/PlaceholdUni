import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {ListComponent} from './list.component';
import {ListRoutingModule} from './list-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ListRoutingModule
    ],
    declarations: [
        ListComponent
    ]
})
export class ListModule {
}
