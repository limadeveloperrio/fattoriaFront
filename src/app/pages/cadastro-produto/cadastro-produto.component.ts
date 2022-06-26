import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produtos: any[] = [];
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  dataAtual = Date.now();

  constructor(
    private produtoService: ProdutoService
  ) { }

//definindo o formulário
formCadastro = new FormGroup({
  //campo 'nome'
  nome: new FormControl('', [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(150)
  ]),
  //campo 'preco'
  preco: new FormControl('', [
  Validators.required
  ]),
  //campo 'dataAdmissao'
  quantidade: new FormControl('', [
  Validators.required
  ]),
  });


  //função para acessar as validações do formulário
  get form(): any {
    return this.formCadastro.controls;
  }


  ngOnInit(): void {
    this.obterProdutos()
  }

  obterProdutos(): void {
    this.produtoService.getAll()
      .subscribe(
        (data) => {
          this.produtos = data as any[];
        },
        (e) => {
          console.log(e)
        }
      )
  }
  onSubmit(): void {
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
    console.log(this.formCadastro.value)
    this.produtoService.post(this.formCadastro.value)
      .subscribe(
        (data: any) => {
          this.mensagem_sucesso = data.mensagem;
          this.formCadastro.reset();
        },
        (e: any) => {
         this.mensagem_erro = e.erro.mensagem;

        }
      )
  }
}
