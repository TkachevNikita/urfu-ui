import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { UOptionComponent, USelectComponent } from '@urfu-ui/u-forms';

@Component({
  selector: 'app-select-wrapper',
  standalone: true,
  imports: [USelectComponent, UOptionComponent],
  template: `
    <u-select [placeholder]="placeholder" [multiple]="multiple">
      <u-option [value]="1" label="Вариант 1"></u-option>
      <u-option [value]="2" label="Вариант 2"></u-option>
      <u-option [value]="3" label="Вариант 3"></u-option>
    </u-select>
  `,
})
class SelectStoryWrapper {
  @Input() placeholder = '';
  @Input() multiple = false;
}

const meta: Meta<SelectStoryWrapper> = {
  title: 'UForms/USelect',
  component: SelectStoryWrapper,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<SelectStoryWrapper>;

export const Default: Story = {
  args: {
    placeholder: 'Выберите элемент',
    multiple: false,
  },
};
