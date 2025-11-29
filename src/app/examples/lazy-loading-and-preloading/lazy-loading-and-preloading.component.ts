import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InfoPanelComponent } from '../../shared';

/**
 * Example demonstrating lazy loading and preloading strategies.
 *
 * Key Performance Insight:
 * - Lazy loading reduces initial bundle size by loading features on-demand
 * - Preloading strategies can improve perceived performance
 * - Custom preloading strategies allow fine-grained control
 * - Essential for large applications with many features
 */
@Component({
  selector: 'app-lazy-loading-and-preloading',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, InfoPanelComponent],
  templateUrl: './lazy-loading-and-preloading.component.html',
  styleUrl: './lazy-loading-and-preloading.component.css',
})
export class LazyLoadingAndPreloadingComponent {
  readonly routes = [
    {
      path: '/lazy-loading-and-preloading/reports',
      label: 'Reports Feature',
      description: 'Lazy loaded reports module - check Network tab to see when it loads',
    },
    {
      path: '/lazy-loading-and-preloading/admin',
      label: 'Admin Feature',
      description: 'Lazy loaded admin module - preloaded after initial load',
    },
    {
      path: '/lazy-loading-and-preloading/analytics',
      label: 'Analytics Feature',
      description: 'Lazy loaded analytics module - check Network tab',
    },
  ];
}

