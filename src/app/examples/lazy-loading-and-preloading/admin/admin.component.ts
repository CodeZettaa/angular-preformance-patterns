import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Admin feature component - lazy loaded with preloading.
 * This component is preloaded after the initial app load.
 */
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin">
      <h2>Admin Feature</h2>
      <p>This feature was lazy loaded and preloaded! Check the Network tab to see when it was loaded.</p>
      <div class="info">
        <h3>Admin Dashboard</h3>
        <p>This is a simulated heavy feature that benefits from preloading.</p>
        <ul>
          <li>User Management</li>
          <li>System Settings</li>
          <li>Permissions</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .admin {
        padding: 2rem;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .admin h2 {
        color: #1976d2;
        margin-top: 0;
      }
      .info {
        margin-top: 2rem;
        padding: 1rem;
        background: #e8f5e9;
        border-radius: 4px;
      }
      .info ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }
    `,
  ],
})
export class AdminComponent {}

