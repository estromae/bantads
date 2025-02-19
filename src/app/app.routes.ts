import { Routes } from '@angular/router';
import { TelaInicialComponent } from './cliente/tela-inicial/tela-inicial.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { AlterarPerfilComponent } from './cliente/alterar-perfil/alterar-perfil.component';

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
