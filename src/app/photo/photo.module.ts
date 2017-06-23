import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PhotoComponent} from './photo.component';
import {PhotoRoutingModule} from './photo-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PhotoRoutingModule
  ],
  declarations: [
    PhotoComponent
  ]
})
export class PhotoModule {
}
