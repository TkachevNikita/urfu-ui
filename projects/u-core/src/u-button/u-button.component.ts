import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { UIconComponent } from '../u-icon/u-icon.component';

@Component({
  selector: 'u-button',
  templateUrl: './u-button.component.html',
  styleUrl: './u-button.component.scss',
  imports: [UIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UButtonComponent {
  private readonly sizeClass = computed(() => `u-button__${this.size()}`);
  private readonly themeClass = computed(() => `u-button__${this.theme()}`);
  private readonly iconPositionClass = computed(() =>
    this.icon() ? `u-button__icon-${this.iconPosition()}` : '',
  );

  protected readonly buttonClasses = computed(() => {
    return [
      'u-button',
      this.themeClass(),
      this.sizeClass(),
      this.iconPositionClass(),
    ].filter(Boolean);
  });

  public readonly disabled = input(false);
  public readonly theme = input<'prime' | 'danger' | 'gray'>(
    'prime',
  );
  public readonly size = input<'small' | 'medium' | 'large'>('medium');
  public readonly icon = input<string>();
  public readonly iconPosition = input<'left' | 'right'>('left');
  public readonly iconSize = input<number>(20);
}
