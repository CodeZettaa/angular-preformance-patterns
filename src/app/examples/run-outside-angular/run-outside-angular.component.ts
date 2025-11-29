import { Component, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyCalculationService } from '../../core';
import { InfoPanelComponent } from '../../shared';

/**
 * Example demonstrating runOutsideAngular for heavy computations.
 *
 * Key Performance Insight:
 * - Heavy synchronous work blocks the main thread and triggers change detection
 * - runOutsideAngular prevents change detection during heavy work
 * - Use run() to re-enter Angular zone only when UI updates are needed
 * - Essential for CPU-intensive operations, image processing, etc.
 */
@Component({
  selector: 'app-run-outside-angular',
  standalone: true,
  imports: [CommonModule, InfoPanelComponent],
  templateUrl: './run-outside-angular.component.html',
  styleUrl: './run-outside-angular.component.css',
})
export class RunOutsideAngularComponent {
  resultInside = signal<number | null>(null);
  resultOutside = signal<number | null>(null);
  changeDetectionCount = signal(0);
  isRunningInside = signal(false);
  isRunningOutside = signal(false);

  constructor(
    private readonly heavyCalculationService: HeavyCalculationService,
    private readonly ngZone: NgZone
  ) {
    // Monitor change detection cycles
    this.ngZone.onStable.subscribe(() => {
      this.changeDetectionCount.update((count) => count + 1);
    });
  }

  /**
   * Run heavy calculation INSIDE Angular zone (default behavior).
   * This will trigger change detection on every cycle, blocking the UI.
   */
  runHeavyWorkInside(): void {
    this.isRunningInside.set(true);
    this.resultInside.set(null);
    this.changeDetectionCount.set(0);

    console.log('[Inside Zone] Starting heavy calculation...');
    const startTime = performance.now();

    // Heavy synchronous work - blocks main thread and triggers change detection
    const result = this.heavyCalculationService.performHeavyCalculation(50000000);

    const endTime = performance.now();
    const duration = endTime - startTime;

    this.resultInside.set(result);
    this.isRunningInside.set(false);

    console.log(`[Inside Zone] Completed in ${duration.toFixed(2)}ms`);
    console.log(`[Inside Zone] Change detection cycles: ${this.changeDetectionCount()}`);
  }

  /**
   * Run heavy calculation OUTSIDE Angular zone.
   * This prevents change detection during the work, then updates UI once.
   */
  runHeavyWorkOutside(): void {
    this.isRunningOutside.set(true);
    this.resultOutside.set(null);
    this.changeDetectionCount.set(0);

    console.log('[Outside Zone] Starting heavy calculation...');
    const startTime = performance.now();

    // Run heavy work outside Angular zone
    this.ngZone.runOutsideAngular(() => {
      const result = this.heavyCalculationService.performHeavyCalculation(50000000);
      const endTime = performance.now();
      const duration = endTime - startTime;

      // Re-enter Angular zone only to update UI
      this.ngZone.run(() => {
        this.resultOutside.set(result);
        this.isRunningOutside.set(false);
        console.log(`[Outside Zone] Completed in ${duration.toFixed(2)}ms`);
        console.log(`[Outside Zone] Change detection cycles: ${this.changeDetectionCount()}`);
      });
    });
  }

  /**
   * Run async heavy work inside zone (simulates API call with processing)
   */
  async runAsyncWorkInside(): Promise<void> {
    this.isRunningInside.set(true);
    this.resultInside.set(null);
    this.changeDetectionCount.set(0);

    console.log('[Inside Zone] Starting async heavy work...');
    const startTime = performance.now();

    const result = await this.heavyCalculationService.performAsyncHeavyWork(1000);

    const endTime = performance.now();
    const duration = endTime - startTime;

    this.resultInside.set(result);
    this.isRunningInside.set(false);

    console.log(`[Inside Zone] Async work completed in ${duration.toFixed(2)}ms`);
  }

  /**
   * Run async heavy work outside zone
   */
  async runAsyncWorkOutside(): Promise<void> {
    this.isRunningOutside.set(true);
    this.resultOutside.set(null);
    this.changeDetectionCount.set(0);

    console.log('[Outside Zone] Starting async heavy work...');
    const startTime = performance.now();

    await this.ngZone.runOutsideAngular(async () => {
      const result = await this.heavyCalculationService.performAsyncHeavyWork(1000);
      const endTime = performance.now();
      const duration = endTime - startTime;

      this.ngZone.run(() => {
        this.resultOutside.set(result);
        this.isRunningOutside.set(false);
        console.log(`[Outside Zone] Async work completed in ${duration.toFixed(2)}ms`);
      });
    });
  }

  reset(): void {
    this.resultInside.set(null);
    this.resultOutside.set(null);
    this.changeDetectionCount.set(0);
  }
}

