import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable component for displaying informational notes in examples.
 * Used to explain what pattern is being demonstrated.
 */
@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.css',
})
export class InfoPanelComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() notes: string[] = [];
}

