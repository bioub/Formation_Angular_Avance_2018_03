import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiCopyrightComponent } from './ui-copyright.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiCopyrightComponent,
  ],
  exports: [
    UiCopyrightComponent,
  ]
})
export class UiCopyrightModule {

}
