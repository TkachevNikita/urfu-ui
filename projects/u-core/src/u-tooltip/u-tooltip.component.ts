import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'u-tooltip',
  styleUrl: './u-tooltip.component.scss',
  templateUrl: './u-tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UTooltipComponent {
  public readonly text = model.required<string>();
  public readonly position = model<'top' | 'bottom'>('top');
}
