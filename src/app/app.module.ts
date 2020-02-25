import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ResultadosComponent } from './resultados/resultados.component';
//import { FormsModule } from '@angular/forms';
import { MovimentoService } from './services/movimento.service';
import { testeComponent } from './teste/teste.component';

import { ProdutoCosifService } from './services/produto.cosif.service';
import { ProdutoService } from './services/produto.service';
//import { HttpClient } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ResultadosComponent,
    testeComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [MovimentoService,ProdutoCosifService, ProdutoService ], //MovimentoService,ProdutoCosifService, ProdutoService 
  bootstrap: [AppComponent]
})
export class AppModule { }
