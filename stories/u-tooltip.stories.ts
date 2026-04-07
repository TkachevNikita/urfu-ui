import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { OverlayModule } from '@angular/cdk/overlay';
import { Component, input } from '@angular/core';
import { UButtonComponent, UTooltipDirective } from '@urfu-ui/u-core';

@Component({
  template: `
    <div
      [uTooltip]="tooltipText()"
      style="display: inline-block; padding: 10px 20px; border: 1px solid gray; cursor: pointer;"
    >
      Наведи для отображения подсказки
    </div>
  `,
  standalone: true,
  imports: [UTooltipDirective, UButtonComponent],
})
class TooltipHostComponent {
  public readonly tooltipText = input('Подсказка по умолчанию');
}

const meta: Meta<TooltipHostComponent> = {
  title: 'u-core/UTooltip',
  component: TooltipHostComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [OverlayModule],
    }),
  ],
  argTypes: {
    tooltipText: {
      control: 'text',
      name: 'Tooltip Text',
      description: 'Текст, отображаемый в тултипе',
    },
  },
};

export default meta;
type Story = StoryObj<TooltipHostComponent>;

export const Default: Story = {
  args: {
    tooltipText: 'Текст подсказки',
  },
  render: (args) => ({
    props: args,
  }),
};
