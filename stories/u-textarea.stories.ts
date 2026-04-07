import type { Meta, StoryObj } from '@storybook/angular';
import { UTextareaComponent } from '@urfu-ui/u-forms';

const meta: Meta<UTextareaComponent> = {
  title: 'UForms/UTextarea',
  component: UTextareaComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
      description: 'Количество видимых строк',
    },
  },
};

export default meta;
type Story = StoryObj<UTextareaComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Введите описание...',
    rows: 3,
  },
};
