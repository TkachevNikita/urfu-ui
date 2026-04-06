import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import {UControlComponent, UInputComponent} from "@urfu-ui/u-forms";

@Component({
  selector: 'app-control-wrapper',
  standalone: true,
  imports: [UControlComponent, UInputComponent],
  template: `
    <u-control
      [title]="title"
      [description]="description"
      [tooltipText]="tooltipText"
      [required]="required"
    >
      <u-input placeholder="Поле внутри контрола"></u-input>
    </u-control>
  `,
})
class ControlStoryWrapper {
  @Input() title = '';
  @Input() description = '';
  @Input() tooltipText = '';
  @Input() required = false;
}

const meta: Meta<ControlStoryWrapper> = {
  title: 'UForms/UControl',
  component: ControlStoryWrapper,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    tooltipText: { control: 'text' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ControlStoryWrapper>;

export const Default: Story = {
  args: {
    title: 'Мое поле',
    description: 'Обязательное поле для ввода данных',
    tooltipText: 'Тут можно написать подробную справку',
    required: true,
  },
};
