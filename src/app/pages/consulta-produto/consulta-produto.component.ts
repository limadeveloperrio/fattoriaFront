import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {
  produtos: any[] = [];
  pagina = 1;
  filtro: string = ""

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';


  constructor(
    private produtoService: ProdutoService
    ) { }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.produtos = data as any[];
      },
      (e: any) => {
        console.log(e);
      }
    )
  }

  //função para trocar de página no componente de paginação
  handlePageChange(event: any): void {
    this.pagina = event;
  }

  excluir(id: number): void {
    if (window.confirm('Deseja realmenente excluir o produto selecionado?')) {
      this.produtoService.delete(id).
        subscribe(
          (data: any) => {
            this.mensagem_sucesso =  data.mensagem;
            this.ngOnInit();
          },
          (e: any) => {
            this.mensagem_erro = e.error.mensagem;
          }
        )
    }
  }
}
