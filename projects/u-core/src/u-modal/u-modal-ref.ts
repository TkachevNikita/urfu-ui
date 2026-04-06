import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

export class UModalRef {
  private readonly afterClosedSubject = new Subject<unknown>();

  constructor(private readonly overlayRef: OverlayRef) {}

  public close(result?: unknown): void {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  public afterClosed(): Observable<unknown> {
    return this.afterClosedSubject.asObservable();
  }
}
