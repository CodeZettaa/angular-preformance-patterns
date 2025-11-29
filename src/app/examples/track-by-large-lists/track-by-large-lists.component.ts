import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { InfoPanelComponent } from '../../shared';

export interface ListItem {
  id: number;
  name: string;
  description: string;
  timestamp: number;
}

/**
 * Example demonstrating the performance benefits of trackBy in *ngFor.
 *
 * Key Performance Insight:
 * - Without trackBy, Angular destroys and recreates ALL DOM elements when list changes
 * - With trackBy, Angular can identify which items changed and only update those
 * - This dramatically reduces DOM manipulation and improves performance with large lists
 */
@Component({
  selector: 'app-track-by-large-lists',
  standalone: true,
  imports: [CommonModule, ListItemComponent, InfoPanelComponent],
  templateUrl: './track-by-large-lists.component.html',
  styleUrl: './track-by-large-lists.component.css',
})
export class TrackByLargeListsComponent {
  // Generate a large list of items
  itemsWithoutTrackBy = signal<ListItem[]>(this.generateItems(1000));
  itemsWithTrackBy = signal<ListItem[]>(this.generateItems(1000));

  private generateItems(count: number): ListItem[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
      timestamp: Date.now(),
    }));
  }

  trackById(_index: number, item: ListItem): number {
    // Return a unique identifier for each item
    // This allows Angular to track which items are which
    return item.id;
  }

  updateFirstItem(): void {
    // Update the first item in both lists
    this.itemsWithoutTrackBy.update((items) => {
      const updated = [...items];
      updated[0] = { ...updated[0], name: `Item 1 (Updated ${Date.now()})` };
      return updated;
    });

    this.itemsWithTrackBy.update((items) => {
      const updated = [...items];
      updated[0] = { ...updated[0], name: `Item 1 (Updated ${Date.now()})` };
      return updated;
    });
  }

  addItem(): void {
    const newId = Math.max(...this.itemsWithoutTrackBy().map((i) => i.id)) + 1;
    const newItem: ListItem = {
      id: newId,
      name: `Item ${newId}`,
      description: `New item added at ${new Date().toLocaleTimeString()}`,
      timestamp: Date.now(),
    };

    this.itemsWithoutTrackBy.update((items) => [newItem, ...items]);
    this.itemsWithTrackBy.update((items) => [newItem, ...items]);
  }

  removeFirstItem(): void {
    this.itemsWithoutTrackBy.update((items) => items.slice(1));
    this.itemsWithTrackBy.update((items) => items.slice(1));
  }

  shuffleItems(): void {
    // Shuffle the array to demonstrate reordering
    this.itemsWithoutTrackBy.update((items) => {
      const shuffled = [...items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });

    this.itemsWithTrackBy.update((items) => {
      const shuffled = [...items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }
}

