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
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required)
  });
  }
  submit(){
    return this.clientes.filter(cliente => cliente.cpf.includes(this.cpfPesquisado))
  }

  cpfPesquisado : string = '';

  //filtrarClientes(): any[] {
  //  return this.clientes.filter(cliente => cliente.cpf.includes(this.cpfPesquisado));
  //}

  clientes = [
    { id: 1, cpf: '111.111.111-11', nome: 'Nome', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 2, cpf: '222.222.222-22', nome: 'Nome', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
    { id: 3, cpf: '333.333.333-33', nome: 'Nome', saldo: 'R$0.00', cidade: 'Cidade', estado: 'Estado' },
  ];
}
