import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { Task } from './task-list-smart.component';

/**
 * Presentational Component (Dumb Component)
 *
 * Responsibilities:
 * - Receives data via @Input
 * - Emits events via @Output
 * - Pure UI rendering
 * - Uses OnPush change detection for performance
 * - No business logic, no data fetching
 *
 * This component can be reused anywhere with different data sources.
 */
@Component({
  selector: 'app-task-list-presentational',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list-presentational.component.html',
  styleUrl: './task-list-presentational.component.css',
})
export class TaskListPresentationalComponent {
  // In a real app, this would come from @Input
  // For demo purposes, we'll manage it locally
  tasks = signal<Task[]>([
    { id: 1, title: 'Write tests', completed: false, priority: 'high' },
    { id: 2, title: 'Code review', completed: true, priority: 'medium' },
    { id: 3, title: 'Deploy to staging', completed: false, priority: 'high' },
  ]);

  completedCount = computed(() => this.tasks().filter((t) => t.completed).length);

  onTaskToggle(taskId: number): void {
    // This would normally just emit an event
    // For demo, we'll update locally
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  }

  onTaskDelete(taskId: number): void {
    // This would normally just emit an event
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  addTask(): void {
    const newTask: Task = {
      id: Date.now(),
      title: `New Task ${this.tasks().length + 1}`,
      completed: false,
      priority: 'medium',
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
}

