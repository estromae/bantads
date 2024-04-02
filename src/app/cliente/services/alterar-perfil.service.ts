import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../shared/models/cliente.model';
import { Endereco } from '../../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class AlterarPerfilService {
  private endpoint = ""

  constructor(private http: HttpClient) { }

  update(client: Cliente, address: Endereco) {
    const data = {
      nome: client.nome,
      email: client.email,
      cpf: client.cpf,
      endereco: address.endereco,
      telefone: client.telefone,
      salario: client.salario
    }
    this.http.put(this.endpoint, data)
  }
}
