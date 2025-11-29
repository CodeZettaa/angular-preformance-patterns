import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Analytics feature component - lazy loaded.
 * This component is only loaded when the route is accessed.
 */
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule,
  ],
  template: `
    <div class="analytics">
      <h2>Analytics Feature</h2>
      <p>This feature was lazy loaded! Check the Network tab to see when it was loaded.</p>
      <div class="info">
        <h3>Analytics Dashboard</h3>
        <p>This is a simulated heavy feature that benefits from lazy loading.</p>
        <ul>
          <li>Real-time Metrics</li>
          <li>Data Visualization</li>
          <li>Export Reports</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .analytics {
        padding: 2rem;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .analytics h2 {
        color: #1976d2;
        margin-top: 0;
      }
      .info {
        margin-top: 2rem;
        padding: 1rem;
        background: #fff3e0;
        border-radius: 4px;
      }
      .info ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }
    `,
  ],
})
export class AnalyticsComponent {}

