import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {MonochromeComponent} from './monochrome.component';
import {MonochromeRoutingModule} from "./monochrome-routing.module";

@NgModule({
    imports: [
        SharedModule,
        MonochromeRoutingModule
    ],
    exports: [],
    declarations: [MonochromeComponent],
    providers: [],
})
export class MonochromeModule {
}
