import { Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultChildComponent } from './default-child.component';
import { OnPushChildComponent } from './onpush-child.component';
import { InfoPanelComponent } from '../../shared';

/**
 * Example demonstrating the performance difference between
 * Default and OnPush change detection strategies.
 *
 * Key Performance Insight:
 * - Default change detection checks all components on every change detection cycle
 * - OnPush only checks when inputs change or events occur within the component
 * - This dramatically reduces unnecessary re-renders in large applications
 */
@Component({
  selector: 'app-onpush-vs-default',
  standalone: true,
  imports: [CommonModule, DefaultChildComponent, OnPushChildComponent, InfoPanelComponent],
  templateUrl: './onpush-vs-default.component.html',
  styleUrl: './onpush-vs-default.component.css',
})
export class OnPushVsDefaultComponent implements OnDestroy {
  // Global counter that changes frequently
  globalCounter = signal(0);
  intervalId: number | null = null;

  // Data passed to child components
  childData = signal({ message: 'Initial message', count: 0 });

  constructor() {
    // Start auto-incrementing counter to trigger change detection
    this.startAutoIncrement();
  }

  startAutoIncrement(): void {
    this.intervalId = window.setInterval(() => {
      this.globalCounter.update((val) => val + 1);
    }, 100);
  }

  stopAutoIncrement(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  updateChildData(): void {
    this.childData.update((data) => ({
      message: `Updated at ${new Date().toLocaleTimeString()}`,
      count: data.count + 1,
    }));
  }

  ngOnDestroy(): void {
    this.stopAutoIncrement();
  }
}

