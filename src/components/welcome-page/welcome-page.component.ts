import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomePageComponent {
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      this.ref.markForCheck();
    }, 1000);
  }
  centered = false;
  disabled = false;
  unbounded = false;

  public radius: number = 0;
  color: string = '#00CED1';
}
