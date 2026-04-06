import { ChangeDetectionStrategy, Component, forwardRef, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {UIconComponent} from "@urfu-ui/u-core";

@Component({
  selector: 'u-checkbox',
  templateUrl: './u-checkbox.component.html',
  styleUrls: ['./u-checkbox.component.scss'],
  imports: [UIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UCheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UCheckboxComponent implements ControlValueAccessor {
  public checked = model(false);

  public writeValue(value: boolean): void {
    this.checked.set(value);
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  public setChecked(value: boolean): void {
    this.checked.set(value);
    this.onChange(value);
  }

  public onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setChecked(target.checked);
  }

  public onTouched(): void {
    this._onTouched();
  }

  private _onTouched: () => void = () => {};
  private onChange: (value: boolean) => void = () => {};
}
