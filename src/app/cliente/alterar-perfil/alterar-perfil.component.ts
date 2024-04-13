import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../shared/models/cliente.model';
import { Endereco } from '../../shared/models/endereco.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-perfil',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    AlterarPerfilComponent
  ],
  templateUrl: './alterar-perfil.component.html',
  styleUrl: './alterar-perfil.component.css'
})
export class AlterarPerfilComponent {

  client: Cliente = new Cliente()
  address: Endereco = new Endereco()

  constructor(private alterarPerfilService: AlterarPerfilComponent, private route: Router) {}

  submitUpdate() {
    console.log(this.address.tipo)
  }

}
