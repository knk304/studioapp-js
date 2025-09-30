import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';

@Component({
  selector: 'workflow',
  standalone: true,
  imports: [CommonModule, ChatbotComponent],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent implements AfterViewInit {
  @ViewChild('workflowSections', { static: true }) workflowSections!: ElementRef<HTMLDivElement>;

  setSectionHeight() {
    const header = document.querySelector('.app-header') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight - headerHeight;
    if (this.workflowSections) {
      this.workflowSections.nativeElement.style.height = sectionHeight + 'px';
    }
  }

  ngAfterViewInit() {
    this.setSectionHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setSectionHeight();
  }
}
