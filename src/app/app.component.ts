import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

// import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [
  //   {
  //     provide: NGX_MONACO_EDITOR_CONFIG,
  //     useValue: {
  //       baseUrl: 'assets', // default 'assets', where monaco is loaded from
  //       defaultOptions: { scrollBeyondLastLine: false },
  //       onMonacoLoad: () => {
  //         // Optional: custom logic after Monaco loads
  //       }
  //     }
  //   }
  // ]
})
export class AppComponent {
}
