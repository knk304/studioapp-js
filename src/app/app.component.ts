import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet],
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
