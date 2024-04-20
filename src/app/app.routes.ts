import { Routes } from '@angular/router';
import { TelaInicialComponent } from './Cliente/tela-inicial/tela-inicial.component';
import { TelaInicialGerenteComponent } from './gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { AlterarPerfilComponent } from './cliente/alterar-perfil/alterar-perfil.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarTodosOsClientesGerenteComponent } from './gerente/consultar-todos-os-clientes-gerente/consultar-todos-os-clientes-gerente.component';

import { MelhoresClientesComponent} from './gerente/melhores-clientes/melhores-clientes.component'
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
    path: "alterar-perfil",
    component: AlterarPerfilComponent
  }
];
