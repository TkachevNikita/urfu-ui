import { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { OverlayModule } from '@angular/cdk/overlay';
import { Component, inject, input } from '@angular/core';
import {MODAL_DATA, UButtonComponent, UModalComponent, UModalService} from "@urfu-ui/u-core";
import {JsonPipe} from "@angular/common";

@Component({
  template: `
    <div>
      <p>Это контент модального окна.</p>
      <p>Данные: {{ data | json }}</p>
    </div>
  `,
  standalone: true,
  imports: [
    JsonPipe
  ]
})
class ModalContentExampleComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = inject(MODAL_DATA);
}

@Component({
  template: `
    <div>
      <u-button theme="prime" (click)="openModal()">Открыть модальное окно</u-button>
    </div>
  `,
  standalone: true,
  imports: [UButtonComponent],
})
class ModalHostComponent {
  private readonly modalService = inject(UModalService);

  public modalTitle = input('Заголовок окна');

  openModal() {
    this.modalService.open(ModalContentExampleComponent, {
      title: this.modalTitle(),
      data: { id: 123, info: 'Test data' }
    });
  }
}

const meta: Meta<ModalHostComponent> = {
  title: 'u-core/UModal',
  component: ModalHostComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [OverlayModule, UModalComponent, ModalContentExampleComponent],
    }),
    componentWrapperDecorator((story) => `<div style="position: relative; height: 100vh;">${story}</div>`),
  ],
  argTypes: {
    modalTitle: {
      control: 'text',
      name: 'Title (Modal)',
    },
  },
};

export default meta;
type Story = StoryObj<ModalHostComponent>;

export const Default: Story = {
  args: {
    modalTitle: 'Мой заголовок',
  },
};
