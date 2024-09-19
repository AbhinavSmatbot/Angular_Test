import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AppComponent } from './app/app.component';

// Configure Toastr options here if needed
const toastrConfig = {
  positionClass: 'toast-bottom-right',
  timeOut: 3000,
  extendedTimeOut: 1000,
  enableHtml: true,
  closeButton: true
};

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Required animations providers
    provideToastr(toastrConfig), // Toastr providers with configuration
  ]
});
