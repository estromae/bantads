import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-todos-os-clientes-gerente',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './consultar-todos-os-clientes-gerente.component.html',
  styleUrl: './consultar-todos-os-clientes-gerente.component.css'
})
export class ConsultarTodosOsClientesGerenteComponent {
  
  ClientForms!: FormGroup;

  constructor() {
    this.ClientForms = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required])
  });
  }

  submit(){ 
    var cpfPesquisado = this.ClientForms.controls['cpf'].value;
    var nomePesquisado = this.ClientForms.controls['nome'].value;
    console.log(cpfPesquisado)
    let clienteEncontrado = this.clientes.find(cliente => cliente.cpf === cpfPesquisado);
    console.log(clienteEncontrado)
    if (!clienteEncontrado){
       clienteEncontrado = this.clientes.find(cliente => cliente.nome === nomePesquisado);
    } 
    if (clienteEncontrado){
      this.clientesPesquisados = [clienteEncontrado];
    }
    else{ 
      this.clientesPesquisados = this.clientes
    }
  }

  clientesPesquisados = [
    { id: 1, cpf: '111.111.111-11', nome: 'Nome1', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 2, cpf: '222.222.222-22', nome: 'Nome2', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 3, cpf: '333.333.333-33', nome: 'Nome3', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
  ]

  clientes = [
    { id: 1, cpf: '111.111.111-11', nome: 'Nome1', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 2, cpf: '222.222.222-22', nome: 'Nome2', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 3, cpf: '333.333.333-33', nome: 'Nome3', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
  ];
}
