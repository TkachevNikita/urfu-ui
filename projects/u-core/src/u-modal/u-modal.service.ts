import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, inject, ComponentRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { take } from 'rxjs';
import { UModalRef } from './u-modal-ref';
import { MODAL_DATA } from './u-modal.token';
import { UModalComponent } from './u-modal.component';

export interface ModalConfig {
  title?: string;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class UModalService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly breakpointObserver = inject(BreakpointObserver);

  public open<T>(component: ComponentType<T>, config?: ModalConfig): UModalRef {
    const isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);

    const positionStrategy = isMobile
      ? this.overlay.position().global().bottom('0').centerHorizontally()
      : this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
    });

    const modalRef = new UModalRef(overlayRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: UModalRef, useValue: modalRef },
        { provide: MODAL_DATA, useValue: config?.data },
      ],
    });

    overlayRef
      .backdropClick()
      .pipe(take(1))
      .subscribe(() => {
        modalRef.close();
      });

    const containerPortal = new ComponentPortal(
      UModalComponent,
      null,
      injector,
    );
    const containerRef = overlayRef.attach(
      containerPortal,
    ) as ComponentRef<UModalComponent>;

    containerRef.instance.load(component);
    containerRef.instance.title.set(config?.title || '');

    return modalRef;
  }
}
