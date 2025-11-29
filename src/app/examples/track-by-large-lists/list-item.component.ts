import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from './track-by-large-lists.component';

/**
 * List item component that logs its lifecycle events.
 * This helps visualize when components are created, updated, or destroyed.
 */
@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input({ required: true }) item!: ListItem;
  private static instanceCount = 0;
  instanceId: number;

  constructor() {
    this.instanceId = ++ListItemComponent.instanceCount;
  }

  ngOnInit(): void {
    console.log(`[ListItem #${this.instanceId}] Created for item: ${this.item.name}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      console.log(
        `[ListItem #${this.instanceId}] Updated - Old: ${changes['item'].previousValue?.name}, New: ${changes['item'].currentValue.name}`
      );
    }
  }

  ngOnDestroy(): void {
    console.log(`[ListItem #${this.instanceId}] Destroyed for item: ${this.item.name}`);
  }
}

