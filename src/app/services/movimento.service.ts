import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimento_Manual} from '../models/Movimento_Manual';

const API = "";

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  http: HttpClient;

  constructor(http: HttpClient) { 

  }

  AdicionarMovimento(movimentoMananual: Movimento_Manual){

        console.log('AdicionarMovimento',movimentoMananual);

        let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })};

       this.http.post(API,movimentoMananual,httpOptions);
  }

}
