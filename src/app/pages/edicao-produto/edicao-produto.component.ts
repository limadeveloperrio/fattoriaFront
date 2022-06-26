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

  formEdicao = new FormGroup({
    idEmpresa: new FormControl('', []),
    nomeFantasia: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),
    razaoSocial: new FormControl('', []),
    cnpj: new FormControl('', [])
  });

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {
    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id');
    this.produtoService.getById(Number(idEmpresa)).subscribe(
      (data: any) => {
        this.formEdicao.controls['idEmpresa'].setValue(data.idEmpresa);
        this.formEdicao.controls['nomeFantasia'].setValue(data.nomeFantasia);
        this.formEdicao.controls['razaoSocial'].setValue(data.idEmpresa);
        this.formEdicao.controls['cnpj'].setValue(data.idEmpresa);
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
