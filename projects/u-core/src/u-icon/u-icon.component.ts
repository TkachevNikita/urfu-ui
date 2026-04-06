import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'u-icon',
  template:
    '<i class="u-icon icon-{{ iconId() }}" [style.font-size.px]="size()"></i>',
  styleUrl: './u-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIconComponent {
  public readonly iconId = input.required<string>();
  public readonly size = input<number>(24);
}
