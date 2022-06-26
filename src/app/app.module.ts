import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './pages/consulta-produto/consulta-produto.component';
import { EdicaoProdutoComponent } from './pages/edicao-produto/edicao-produto.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './pages/footer/footer.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { InputMaskModule } from '@ngneat/input-mask';

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
    EdicaoProdutoComponent,
    FooterComponent

    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    InputMaskModule

  ],
  providers: [
  { provide: LOCALE_ID, useValue: 'pt' },
  { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
