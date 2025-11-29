import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Example {
  path: string;
  title: string;
  description: string;
  keyPoints: string[];
}

/**
 * Home page component that lists all performance pattern examples.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly examples: Example[] = [
    {
      path: '/onpush-vs-default',
      title: 'OnPush vs Default Change Detection',
      description:
        'Demonstrates the performance difference between Default and OnPush change detection strategies.',
      keyPoints: [
        'Default change detection checks all components on every cycle',
        'OnPush only checks when inputs change or events occur',
        'Dramatically reduces unnecessary re-renders',
      ],
    },
    {
      path: '/track-by-large-lists',
      title: 'TrackBy with Large Lists',
      description:
        'Shows how trackBy improves performance when rendering large lists by minimizing DOM manipulation.',
      keyPoints: [
        'Without trackBy: Angular destroys and recreates all items',
        'With trackBy: Only changed items are updated',
        'Essential for lists with 100+ items',
      ],
    },
    {
      path: '/smart-vs-presentational',
      title: 'Smart vs Presentational Components',
      description:
        'Demonstrates the Container/Presentational pattern for better performance and maintainability.',
      keyPoints: [
        'Smart components handle data and business logic',
        'Presentational components are pure UI with OnPush',
        'Improves reusability, testability, and performance',
      ],
    },
    {
      path: '/lazy-loading-and-preloading',
      title: 'Lazy Loading and Preloading',
      description:
        'Shows how lazy loading reduces initial bundle size and how preloading improves perceived performance.',
      keyPoints: [
        'Lazy loading splits code into smaller chunks',
        'Custom preloading strategies for fine-grained control',
        'Reduces Time to Interactive (TTI)',
      ],
    },
    {
      path: '/run-outside-angular',
      title: 'runOutsideAngular for Heavy Work',
      description:
        'Demonstrates how to run CPU-intensive operations outside Angular zone to prevent blocking change detection.',
      keyPoints: [
        'Prevents change detection during heavy computations',
        'Re-enter zone only when UI updates are needed',
        'Essential for CPU-intensive operations',
      ],
    },
  ];
}

