import { Meta, StoryObj } from '@storybook/angular';
import { UIconComponent } from '@urfu-ui/u-core';

const meta: Meta<UIconComponent> = {
  title: 'u-core/UIcon',
  component: UIconComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 8, max: 64, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<UIconComponent>;

export const Default: Story = {
  args: {
    iconId: 'icon-active',
    size: 24,
  },
  render: (args) => ({
    props: args,
    template: `<u-icon [iconId]="iconId" [size]="size"></u-icon>`,
  }),
};
