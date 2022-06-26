import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { ConsultaProdutoComponent } from "./pages/consulta-produto/consulta-produto.component";
import { EdicaoProdutoComponent } from "./pages/edicao-produto/edicao-produto.component";
import { PaginaInicialComponent } from "./pages/pagina-inicial/pagina-inicial.component";

const routes: Routes = [

    {
        path: '',
        component: PaginaInicialComponent
    },

    {
        path: 'cadastro-produto',
        component: CadastroProdutoComponent
    },

    {
      path: 'consulta-produto',
      component: ConsultaProdutoComponent
    },

    {
    path: 'edicao-produto',
    component: EdicaoProdutoComponent
    }
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
