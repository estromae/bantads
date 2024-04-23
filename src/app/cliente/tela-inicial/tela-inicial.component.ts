import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: "app-tela-inicial",
  standalone: true,
  imports: [TransactionComponent],
  templateUrl: "./tela-inicial.component.html",
  styleUrl: "./tela-inicial.component.css",
})
export class TelaInicialComponent {
  cliente = {
    nome: "João da Silva",
    numeroConta: "123456789",
    saldo: 5000.5,
    transacoes: [
      { data: new Date(), descricao: "Depósito", valor: 1000.0 },
      { data: new Date(), descricao: "Compra", valor: -500.5 },
      // Adicione mais transações conforme necessário
    ],
  };
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TransactionComponent, {
      width: "250px",
      data: {
        modalTitle: "Perform Transaction",
        transactionAmount: null,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
