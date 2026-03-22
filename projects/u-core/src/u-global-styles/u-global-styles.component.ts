import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'u-global-styles',
  styleUrls: [
    '../styles/constants.css',
    '../styles/global.css',
    '../styles/typography.css',
  ],
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UGlobalStylesComponent {}
