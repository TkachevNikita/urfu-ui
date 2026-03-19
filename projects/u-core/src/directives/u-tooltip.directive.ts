import {
  ComponentRef,
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { UTooltipComponent } from '../components/u-tooltip/u-tooltip.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[uTooltip]',
})
export class UTooltipDirective implements OnInit {
  private readonly overlay = inject(Overlay);
  private readonly overlayPositionBuilder = inject(OverlayPositionBuilder);
  private readonly elementRef = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  private overlayRef: OverlayRef | null = null;
  private tooltipRef: ComponentRef<UTooltipComponent> | null = null;

  public readonly text = input.required<string>({ alias: 'uTooltip' });

  public ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8,
        },
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });

    positionStrategy.positionChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((change) => {
        if (this.tooltipRef) {
          this.tooltipRef.instance.position.set(
            change.connectionPair.originY as 'top' | 'bottom',
          );
        }
      });
  }

  @HostListener('mouseenter')
  public show(): void {
    if (this.overlayRef) {
      const tooltipPortal = new ComponentPortal(UTooltipComponent);
      this.tooltipRef = this.overlayRef.attach(tooltipPortal);
      this.tooltipRef.instance.text.set(this.text());
    }
  }

  @HostListener('mouseout')
  public hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
