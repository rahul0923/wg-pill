/**
 * @license
 * Copyright WatchGuard Technologies Inc. All Rights Reserved.
 *
 * This module exports WgPillComponent that renders a pill 
 * 
 * There are 3 input properties this component takes in:
 *  pillWidth: a number indicates how wide the pill should number
 *  pillProgress: a number indicates how much the pill should be filled
 *  pillClass: background color to match the pillProgress
 *
 */

import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'wg-control-wg-pill',
  template: `
    <div [ngStyle]="{ 'width.px': pillWidth }">
      <div class="pctbar progress-inverse pctbar">
        <div [ngClass]="pillClass"
             [ngStyle]="{ 'width': pillProgress + '%' }">
        </div>
      </div>
  </div>
`,
  styles:[`
    .pctbar {
      margin-top: 4px;
    }
  `]
})
export class WgPillComponent {

  @Input() pillWidth: number;
  @Input() pillProgress: number;
  @Input() pillType: string;

  progressClass: string = '';

  constructor() { }
  
  get showProgress() {    
    if (this.pillProgress && this.pillProgress > 0) {
      return 'pctbar-bar';
    }
    return '';
  }

  get pillClass() {
    let pClass = 'pctbar_';
    if (this.pillType) {
      pClass += this.pillType;
    }    
    return this.showProgress + ' ' + pClass;
  }
}
