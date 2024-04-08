import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.css'
})
export class ConsultarClienteComponent {

  clientes = {
    name: "Nome do Cliente",
    cpf: "000.000.000-00",
    email: "cliente@example.com",
    telefone: "(00) 0000-0000",
    tipo: "Residencial",
    logadouro: "Rua Exemplo",
    numero: 123,
    complemento: "Complemento",
    cep: "00000-000",
    estado: "Estado",
    cidade: "Cidade",
    saldo: 1000.00,
    gerente: "Nome do Gerente"
};

}
