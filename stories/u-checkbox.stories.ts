import type { Meta, StoryObj } from '@storybook/angular';
import { UCheckboxComponent } from '@urfu-ui/u-forms';

const meta: Meta<UCheckboxComponent> = {
  title: 'UForms/UCheckbox',
  component: UCheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Отмечен ли чекбокс',
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <u-checkbox [checked]="checked">
        Текст чекбокса
      </u-checkbox>
    `,
  }),
};

export default meta;
type Story = StoryObj<UCheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
};
