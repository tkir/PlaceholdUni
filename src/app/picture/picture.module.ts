import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PictureComponent } from './picture.component';
import { PictureRoutingModule } from './picture-routing.module';

@NgModule({
    imports: [
        SharedModule,
        PictureRoutingModule
    ],
    declarations: [
        PictureComponent
    ]
})
export class PictureModule { }
