import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reports feature component - lazy loaded.
 * This component is only loaded when the route is accessed.
 */
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports">
      <h2>Reports Feature</h2>
      <p>This feature was lazy loaded! Check the Network tab to see when it was loaded.</p>
      <div class="info">
        <h3>Reports Dashboard</h3>
        <p>This is a simulated heavy feature that benefits from lazy loading.</p>
        <ul>
          <li>Sales Reports</li>
          <li>User Analytics</li>
          <li>Performance Metrics</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .reports {
        padding: 2rem;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .reports h2 {
        color: #1976d2;
        margin-top: 0;
      }
      .info {
        margin-top: 2rem;
        padding: 1rem;
        background: #e3f2fd;
        border-radius: 4px;
      }
      .info ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }
    `,
  ],
})
export class ReportsComponent {}

