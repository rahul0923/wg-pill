import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WgPillComponent } from './wg-pill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WgPillComponent],
  exports: [WgPillComponent]
})
export class WgPillModule { }
