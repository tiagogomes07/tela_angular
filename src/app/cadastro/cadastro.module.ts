import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    FormsModule,  CommonModule, 
  ]
})
export class CadastroModule {

}
