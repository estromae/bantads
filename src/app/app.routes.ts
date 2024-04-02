import { Routes } from '@angular/router';
import { TelaInicialComponent } from './cliente/tela-inicial/tela-inicial.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { ConsultarTodosOsClientesGerenteComponent } from './gerente/consultar-todos-os-clientes-gerente/consultar-todos-os-clientes-gerente.component';


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
    path: 'gerente-consultar-todos-os-clientes',
    component: ConsultarTodosOsClientesGerenteComponent,
  },
];
