import { Routes } from '@angular/router';
import { TelaInicialComponent } from './Cliente/tela-inicial/tela-inicial.component';
import { TelaInicialGerenteComponent } from './gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
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
    path: 'gerente-consultar-todos-os-clientes',
    component: ConsultarTodosOsClientesGerenteComponent,
  },
];
    {
        path: "telainicial",
        component: TelaInicialComponent,
    },
    {
        path: "autocadastro",
        component: AutocadastroComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'telainicialgerente',
        component: TelaInicialGerenteComponent
    },
    {
        path: 'melhoresclientes',
        component: MelhoresClientesComponent
    },
    {
        path: '',
        component: TelaInicialComponent    
    }

    ];
