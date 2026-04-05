import { Meta, StoryObj } from '@storybook/angular';
import { UButtonComponent } from '@urfu-ui/u-core';

const meta: Meta<UButtonComponent> = {
  title: 'u-core/UButton',
  component: UButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['prime', 'danger', 'gray'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
      description: 'ID иконки (например, icon-active)',
    },
  },
};

export default meta;
type Story = StoryObj<UButtonComponent>;

export const Default: Story = {
  args: {
    theme: 'prime',
    size: 'medium',
    disabled: false,
    icon: 'icon-active',
    iconPosition: 'left',
    iconSize: 20,
  },
  render: (args) => ({
    props: args,
    template: `<u-button
      [theme]="theme"
      [size]="size"
      [disabled]="disabled"
      [icon]="icon"
      [iconPosition]="iconPosition"
      [iconSize]="iconSize">
      Кнопка
    </u-button>`,
  }),
};
