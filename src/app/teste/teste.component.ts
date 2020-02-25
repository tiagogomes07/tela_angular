import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'testeComponent',
  template: `
   
  `,
})
export class testeComponent {
  name: string = '';

  setValue() { this.name = 'Nancy'; }
}