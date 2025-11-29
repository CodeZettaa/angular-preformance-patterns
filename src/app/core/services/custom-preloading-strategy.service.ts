import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

/**
 * Custom preloading strategy that preloads routes based on a 'preload' flag in route data.
 *
 * This strategy:
 * - Preloads routes that have data: { preload: true }
 * - Delays preloading by 2 seconds to avoid blocking initial load
 * - Can be extended to preload based on user roles, network conditions, etc.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    // Check if route has preload flag in data
    if (route.data && route.data['preload'] === true) {
      // Delay preloading by 2 seconds to avoid blocking initial load
      return timer(2000).pipe(mergeMap(() => load()));
    }
    // Don't preload routes without the flag
    return of(null);
  }
}

