import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-copyright',
  // styleUrls: ['./ui-copyright.style.scss'],
  template: `
    © Copyright {{name}} {{now}}
  `
})
export class UiCopyrightComponent {
  @Input()
  public name = '';

  public now = (new Date()).getFullYear();
}
