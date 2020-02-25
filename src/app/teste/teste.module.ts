import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testeComponent} from './teste.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [testeComponent],
  imports: [
    FormsModule,  CommonModule, 
  ]
})
export class teste{

}
