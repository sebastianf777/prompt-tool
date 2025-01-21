import { Component } from '@angular/core';
import { PromptService } from '../../services/prompt-service';
import { CommonModule } from '@angular/common'; 
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent {
  buttons = [
    { label: 'Camera Lens', prompts: ['Wide Angle', 'Telephoto', 'Macro', 'Fisheye'], show: false },
    { label: 'Lighting', prompts: ['Soft Light', 'Hard Light', 'Backlight', 'Natural Light'], show: false },
    { label: 'Style', prompts: ['Minimalist', 'Abstract', 'Retro', 'Modern'], show: false }
  ];

  constructor(private promptService: PromptService) {}

  addToPrompt(prompt: string) {
    this.promptService.addPrompt(prompt);
  }
}
