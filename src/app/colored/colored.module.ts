import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ColoredComponent } from './colored.component';
import { ColoredRoutingModule } from './colored-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ColoredRoutingModule
    ],
    declarations: [
        ColoredComponent
    ]
})
export class ColoredModule { }
