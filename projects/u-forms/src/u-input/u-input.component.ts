import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UIconComponent } from '@urfu-ui/u-core';

@Component({
  selector: 'u-input',
  templateUrl: './u-input.component.html',
  styleUrls: ['./u-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIconComponent],
})
export class UInputComponent implements ControlValueAccessor {
  public placeholder = input('');
  public iconLeftId = input<string>('');
  public iconRightId = input<string>('');

  public isFocused = signal(false);
  public isDisabled = signal(false);

  public value = '';

  public writeValue(value: string): void {
    this.value = value ?? '';
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  public onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  public onBlur(): void {
    this.isFocused.set(false);
    this.onTouched();
  }

  public onFocus(): void {
    this.isFocused.set(true);
  }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
}
