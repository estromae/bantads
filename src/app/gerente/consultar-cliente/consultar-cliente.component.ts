import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.css'
})
export class ConsultarClienteComponent {

  ClientForms!: FormGroup;

  constructor() {
    this.ClientForms = new FormGroup({
      cpf: new FormControl('', [Validators.required])
  });}

  submit(){ 
    var cpfPesquisado = this.ClientForms.controls['cpf'].value;
    console.log(cpfPesquisado);
    let clienteEncontrado = this.clientes.find(clientes => clientes.cpf === cpfPesquisado);
    console.log(clienteEncontrado);
    if (clienteEncontrado){
      this.cliente = clienteEncontrado;
    }
    else{ 
      this.cliente = this.clientes[0]
    }
  }


  cliente = {
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

clientes = [
  {
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
  },
  {
      name: "Nome do Cliente 1",
      cpf: "111.111.111-11",
      email: "cliente1@example.com",
      telefone: "(11) 1111-1111",
      tipo: "Residencial",
      logadouro: "Rua Exemplo 1",
      numero: 123,
      complemento: "Complemento 1",
      cep: "11111-111",
      estado: "Estado 1",
      cidade: "Cidade 1",
      saldo: 1000.00,
      gerente: "Nome do Gerente 1"
  },
  {
      name: "Nome do Cliente 2",
      cpf: "222.222.222-22",
      email: "cliente2@example.com",
      telefone: "(22) 2222-2222",
      tipo: "Comercial",
      logadouro: "Rua Exemplo 2",
      numero: 456,
      complemento: "Complemento 2",
      cep: "22222-222",
      estado: "Estado 2",
      cidade: "Cidade 2",
      saldo: 1500.00,
      gerente: "Nome do Gerente 2"
  },
  {
      name: "Nome do Cliente 3",
      cpf: "333.333.333-33",
      email: "cliente3@example.com",
      telefone: "(33) 3333-3333",
      tipo: "Residencial",
      logadouro: "Rua Exemplo 3",
      numero: 789,
      complemento: "Complemento 3",
      cep: "33333-333",
      estado: "Estado 3",
      cidade: "Cidade 3",
      saldo: 2000.00,
      gerente: "Nome do Gerente 3"
  }
];

}
