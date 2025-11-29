import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { FakeApiService } from '../../core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

/**
 * Smart Component (Container Component)
 *
 * Responsibilities:
 * - Fetches data from services/APIs
 * - Manages component state
 * - Handles business logic
 * - Transforms data for presentational components
 * - Handles events from presentational components
 */
@Component({
  selector: 'app-task-list-smart',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list-smart.component.html',
  styleUrl: './task-list-smart.component.css',
})
export class TaskListSmartComponent {
  tasks = signal<Task[]>([]);
  loading = signal(false);
  completedCount = computed(() => this.tasks().filter((t) => t.completed).length);

  constructor(private readonly apiService: FakeApiService) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading.set(true);
    // Simulate API call
    setTimeout(() => {
      this.tasks.set([
        { id: 1, title: 'Review pull request', completed: false, priority: 'high' },
        { id: 2, title: 'Update documentation', completed: true, priority: 'medium' },
        { id: 3, title: 'Fix bug in login', completed: false, priority: 'high' },
        { id: 4, title: 'Plan sprint', completed: false, priority: 'low' },
      ]);
      this.loading.set(false);
    }, 500);
  }

  onTaskToggle(taskId: number): void {
    // Business logic: Update task completion status
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  }

  onTaskDelete(taskId: number): void {
    // Business logic: Remove task
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

