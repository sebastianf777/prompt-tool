import { Component } from '@angular/core';
import { PromptService } from '../../services/prompt.service';

@Component({
  selector: 'app-prompt-area',
  templateUrl: './prompt-area.component.html',
  styleUrls: ['./prompt-area.component.css']
})
export class PromptAreaComponent {
  fullPrompt: string = '';

  constructor(private promptService: PromptService) {
    this.promptService.prompts$.subscribe(prompts => {
      this.fullPrompt = prompts.join(' ');
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.fullPrompt);
    alert('Copied to clipboard!');
  }
}
