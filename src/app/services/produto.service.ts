import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  endpoint: string = environment.apiUrl + "/produtos";
  constructor(private httpCliente: HttpClient) { }

  post(produto: any){
    return this.httpCliente.post(this.endpoint, produto);
  }

  put(produto:any){
    return this.httpCliente.put(this.endpoint, produto);
  }
  delete(idproduto: number){
    return this.httpCliente.delete(this.endpoint +"/"+ idproduto);
  }
  getAll(){
    return this.httpCliente.get(this.endpoint)
  }
  getById(idproduto: number){
    return this.httpCliente.get(this.endpoint + "/" + idproduto)
  }
}
