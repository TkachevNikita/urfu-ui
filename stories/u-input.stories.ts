import type { Meta, StoryObj } from '@storybook/angular';
import {UInputComponent} from "@urfu-ui/u-forms";

const meta: Meta<UInputComponent> = {
  title: 'UForms/UInput',
  component: UInputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    iconLeftId: {
      control: 'text',
      description: 'ID иконки слева (например, search)',
    },
    iconRightId: {
      control: 'text',
      description: 'ID иконки справа',
    },
  },
};

export default meta;
type Story = StoryObj<UInputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Введите название...',
    iconLeftId: '',
    iconRightId: '',
  },
};
