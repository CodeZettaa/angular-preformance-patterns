import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListSmartComponent } from './task-list-smart.component';
import { TaskListPresentationalComponent } from './task-list-presentational.component';
import { InfoPanelComponent } from '../../shared';

/**
 * Example demonstrating the Smart vs Presentational (Container/Presentational) pattern.
 *
 * Key Performance Insight:
 * - Smart components handle data fetching, state management, and business logic
 * - Presentational components are pure UI components with @Input/@Output
 * - Presentational components use OnPush, reducing unnecessary re-renders
 * - This pattern improves testability, reusability, and performance
 */
@Component({
  selector: 'app-smart-vs-presentational',
  standalone: true,
  imports: [
    CommonModule,
    TaskListSmartComponent,
    TaskListPresentationalComponent,
    InfoPanelComponent,
  ],
  templateUrl: './smart-vs-presentational.component.html',
  styleUrl: './smart-vs-presentational.component.css',
})
export class SmartVsPresentationalComponent {
  showSmart = signal(true);
  showPresentational = signal(true);
}

