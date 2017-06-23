import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PhotoComponent} from './photo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'photo', component: PhotoComponent}
        ])
    ]
})
export class PhotoRoutingModule {
}
