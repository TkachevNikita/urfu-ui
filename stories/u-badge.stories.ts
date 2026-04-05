import { Meta, StoryObj } from '@storybook/angular';
import {UBadgeComponent} from "../projects/u-core/src/u-badge/u-badge.component";

const meta: Meta<UBadgeComponent> = {
  title: 'u-core/UBadge',
  component: UBadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['info', 'warning', 'success', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<UBadgeComponent>;

export const Badge: Story = {
  args: {
    theme: 'info',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<u-badge [theme]="theme" [size]="size">Текст</u-badge>`,
  }),
};
