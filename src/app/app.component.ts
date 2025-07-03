import { Component } from '@angular/core';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
  <h1>PCR Web Application - Angular 20</h1>
  <button kendoButton themeColor="primary" size="large">
    Kendo Primary Button
  </button>
  <br><br>
  <button>Regular HTML Button</button>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pcr-web-v19';
}
