import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type BadgeTheme = 'info' | 'warning' | 'success' | 'neutral';

@Component({
  selector: 'u-badge',
  templateUrl: './u-badge.component.html',
  styleUrl: './u-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UBadgeComponent {
  public readonly theme = input<BadgeTheme>('info');
  public readonly size = input<'small' | 'large'>('large');
}
