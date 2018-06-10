import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MissingPageComponent,
    MySurveysComponent
  ],
  declarations: []
})
export class PagesModule { }
