import { Routes } from '@angular/router';
import { TelaInicialComponent } from './cliente/tela-inicial/tela-inicial.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';

export const routes: Routes = [
  {
    path: 'telainicial',
    component: TelaInicialComponent,
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente',
    component: TelaInicialComponent,
  },
  {
    path: 'gerente-consultar-cliente',
    component: ConsultarClienteComponent,
  }
];
