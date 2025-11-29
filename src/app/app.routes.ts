import { Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './core/services/custom-preloading-strategy.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'onpush-vs-default',
    loadComponent: () =>
      import('./examples/onpush-vs-default/onpush-vs-default.component').then(
        (m) => m.OnPushVsDefaultComponent
      ),
  },
  {
    path: 'track-by-large-lists',
    loadComponent: () =>
      import('./examples/track-by-large-lists/track-by-large-lists.component').then(
        (m) => m.TrackByLargeListsComponent
      ),
  },
  {
    path: 'smart-vs-presentational',
    loadComponent: () =>
      import('./examples/smart-vs-presentational/smart-vs-presentational.component').then(
        (m) => m.SmartVsPresentationalComponent
      ),
  },
  {
    path: 'lazy-loading-and-preloading',
    loadComponent: () =>
      import(
        './examples/lazy-loading-and-preloading/lazy-loading-and-preloading.component'
      ).then((m) => m.LazyLoadingAndPreloadingComponent),
    children: [
      {
        path: 'reports',
        loadComponent: () =>
          import('./examples/lazy-loading-and-preloading/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./examples/lazy-loading-and-preloading/admin/admin.component').then(
            (m) => m.AdminComponent
          ),
        data: { preload: true }, // This route will be preloaded
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./examples/lazy-loading-and-preloading/analytics/analytics.component').then(
            (m) => m.AnalyticsComponent
          ),
      },
    ],
  },
  {
    path: 'run-outside-angular',
    loadComponent: () =>
      import('./examples/run-outside-angular/run-outside-angular.component').then(
        (m) => m.RunOutsideAngularComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
