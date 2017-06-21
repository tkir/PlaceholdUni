import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, XLargeDirective} from './app.component';
import {MonochromeModule} from "./monochrome/monochrome.module";
import {ColoredModule} from "./colored/colored.module";
import {PictureModule} from "./picture/picture.module";
import {ListModule} from "./list/list.module";
import {TextModule} from "./text/text.module";


@NgModule({
    declarations: [AppComponent, XLargeDirective],
    imports: [
        SharedModule,

        MonochromeModule,
        ColoredModule,
        PictureModule,
        TextModule,
        ListModule,

        AppRoutingModule
    ]
})
export class AppModule {
}

export {AppComponent} from './app.component';
