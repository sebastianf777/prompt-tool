import { Component } from '@angular/core';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { PromptAreaComponent } from './components/prompt-area/prompt-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonListComponent, PromptAreaComponent],
  template: `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin: 20px;">
      <app-button-list></app-button-list>
      <app-prompt-area></app-prompt-area>
    </div>
  `
})
export class AppComponent {}
