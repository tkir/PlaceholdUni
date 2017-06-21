import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonochromeComponent } from './monochrome.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'monochrome', component: MonochromeComponent }
        ])
    ]
})
export class MonochromeRoutingModule { }