import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Child component using ONPUSH change detection strategy.
 * This component will ONLY be checked when:
 * 1. Its inputs change (by reference)
 * 2. An event occurs within the component
 * 3. An async pipe receives a new value
 * 4. ChangeDetectorRef.markForCheck() is called
 */
@Component({
  selector: 'app-onpush-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-child.component.html',
  styleUrl: './onpush-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // Key performance optimization!
})
export class OnPushChildComponent implements DoCheck {
  @Input({ required: true }) data!: { message: string; count: number };
  renderCount = 0;

  ngDoCheck(): void {
    // This only runs when OnPush conditions are met
    this.renderCount++;
    console.log(
      `[OnPush Child] Change detection run #${this.renderCount} - Data:`,
      this.data
    );
  }
}

