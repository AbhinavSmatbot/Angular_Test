import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startProgress();
  }

  startProgress(): void {
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress === 100) {
        clearInterval(interval);
      }
    }, 1000); // Update progress every 1 second
  }
}
