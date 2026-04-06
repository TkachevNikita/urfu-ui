import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import {UIconComponent, UTooltipDirective} from '@urfu-ui/u-core';

@Component({
  selector: 'u-control',
  templateUrl: './u-control.component.html',
  styleUrls: ['./u-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIconComponent, UTooltipDirective],
})
export class UControlComponent {
  public title = input<string>('');
  public description = input<string>('');
  public tooltipText = input<string>('');
  public required = input<boolean>(false);
}
