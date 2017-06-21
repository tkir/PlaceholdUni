import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ColoredComponent } from './colored.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'colored', component: ColoredComponent }
        ])
    ]
})
export class ColoredRoutingModule { }
