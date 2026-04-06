import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'u-textarea',
  templateUrl: './u-textarea.component.html',
  styleUrls: ['./u-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UTextareaComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UTextareaComponent implements ControlValueAccessor {
  public placeholder = input('');
  public rows = input<number>(3);

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
    const target = event.target as HTMLTextAreaElement;
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
