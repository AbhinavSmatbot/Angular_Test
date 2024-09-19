import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  progress: number = 0;
  show_progressBar: boolean = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.startProgress();
  }

  onUpClick() {
    this.show_progressBar = !this.show_progressBar;
  }

  showSuccess(str: string) {
    this.toastr.success(str, 'Success');
  }

  startProgress(): void {
    this.progress = 0;
    this.show_progressBar = true;
    const interval = setInterval(() => {
      this.progress += 5;
      if (this.progress === 100) {
        clearInterval(interval);
        this.progress = 0;
        this.show_progressBar = false;
        this.showSuccess('Migration process has been completed');
      }
    }, 1000); // Update progress every 1 second
  }
}
