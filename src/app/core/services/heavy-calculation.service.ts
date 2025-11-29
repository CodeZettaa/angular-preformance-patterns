import { Injectable } from '@angular/core';

/**
 * Service to simulate heavy CPU-bound calculations.
 * Used in performance examples to demonstrate runOutsideAngular pattern.
 */
@Injectable({
  providedIn: 'root',
})
export class HeavyCalculationService {
  /**
   * Simulates a heavy computation by running a CPU-intensive loop.
   * @param iterations Number of iterations to perform
   * @returns The result of the calculation
   */
  performHeavyCalculation(iterations: number): number {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
      // Simulate heavy computation
      result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    return result;
  }

  /**
   * Simulates an async heavy operation (e.g., processing large dataset)
   * @param delayMs Delay in milliseconds to simulate async work
   * @returns Promise that resolves with a result
   */
  async performAsyncHeavyWork(delayMs: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = this.performHeavyCalculation(1000000);
        resolve(result);
      }, delayMs);
    });
  }
}

