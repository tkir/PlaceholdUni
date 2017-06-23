import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TextComponent } from './text.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'lorem', component: TextComponent }
        ])
    ]
})
export class TextRoutingModule { }
