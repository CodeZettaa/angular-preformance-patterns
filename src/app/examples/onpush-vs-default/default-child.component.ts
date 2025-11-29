import { Component, DoCheck, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Child component using DEFAULT change detection strategy.
 * This component will be checked on EVERY change detection cycle,
 * even when its inputs haven't changed.
 */
@Component({
  selector: 'app-default-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-child.component.html',
  styleUrl: './default-child.component.css',
  // No changeDetection specified = DEFAULT strategy
})
export class DefaultChildComponent implements DoCheck {
  @Input({ required: true }) data!: { message: string; count: number };
  renderCount = 0;

  ngDoCheck(): void {
    // This runs on EVERY change detection cycle
    this.renderCount++;
    console.log(
      `[Default Child] Change detection run #${this.renderCount} - Data:`,
      this.data
    );
  }
}

