import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  model,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { UModalRef } from './u-modal-ref';
import { ComponentType } from '@angular/cdk/portal';
import { UIconComponent } from '../u-icon/u-icon.component';

@Component({
  templateUrl: './u-modal.component.html',
  styleUrl: './u-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIconComponent],
})
export class UModalComponent {
  private readonly modalRef = inject(UModalRef);

  public readonly title = model<string>('');
  public readonly content = viewChild('content', {
    read: ViewContainerRef,
  });

  public load<T>(component: ComponentType<T>): void {
    this.content()?.clear();
    this.content()?.createComponent(component);
  }

  public close(): void {
    this.modalRef.close();
  }

  @HostListener('window:keydown.esc')
  public handleEsc(): void {
    this.close();
  }
}
