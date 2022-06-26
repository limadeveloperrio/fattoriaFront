import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.component.html',
  styleUrls: ['./edicao-produto.component.css']
})
export class EdicaoProdutoComponent implements OnInit {

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  dataAtual = Date.now();

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) { }


  //definindo o formulário
  formEdicao = new FormGroup({
  idProduto: new FormControl('', []),
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

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {
    var idProduto = this.activatedRoute.snapshot.paramMap.get('id');
     this.produtoService.getById(Number(idProduto)).subscribe(
      (data: any) => {
        console.log(data)
        this.formEdicao.controls['idProduto'].setValue(data.produto.idProduto);
        this.formEdicao.controls['nome'].setValue(data.produto.nome);
        this.formEdicao.controls['preco'].setValue(data.produto.preco);
        this.formEdicao.controls['quantidade'].setValue(data.produto.quantidade);
      },
      (e: any) => {
        console.log(e);
      }
    )
  }

  //evento SUBMIT do formulário
  onSubmit(): void {
    this.produtoService.put(this.formEdicao.value)
    .subscribe(
      (data: any) => {
        this.mensagem_sucesso = data.mensagem;
      },
      (e:any) => {
        this.mensagem_erro = e.error.mensagem;
      }

    )
  }
}
