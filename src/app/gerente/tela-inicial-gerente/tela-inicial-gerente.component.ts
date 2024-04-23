import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAprovarComponent } from './modal/modal-aprovar/modal-aprovar.component';
import { ModalRejeitarComponent } from './modal/modal-rejeitar/modal-rejeitar.component';
@Component({
  selector: 'app-tela-inicial-gerente',
  standalone: true,
  imports: [],
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrl: './tela-inicial-gerente.component.css'
})
export class TelaInicialGerenteComponent implements OnInit  {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void { 
  }

  aprovar(): void {
    const dialogRef = this.dialog.open(ModalAprovarComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal foi fechada');
    });
  }

  rejeitar(): void {
    const dialogRef = this.dialog.open(ModalRejeitarComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal foi fechada');
    });
  }
}
