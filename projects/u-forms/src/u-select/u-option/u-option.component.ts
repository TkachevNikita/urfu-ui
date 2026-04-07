import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { UCheckboxComponent } from '@urfu-ui/u-forms';
import { USelectComponent } from '../u-select.component';

@Component({
  selector: 'u-option',
  templateUrl: './u-option.component.html',
  styleUrls: ['./u-option.component.scss'],
  imports: [UCheckboxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UOptionComponent<T> {
  public parent?: USelectComponent<T>;
  public value = input.required<T>();
  public label = input.required<string>();

  public selected = signal(false);

  public registerParent(parent: USelectComponent<T>): void {
    this.parent = parent;
  }

  public onClick(): void {
    this.parent?.selectOption(this);
  }
}
