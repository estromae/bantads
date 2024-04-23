import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-aprovar',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal-aprovar.component.html',
  styleUrl: './modal-aprovar.component.css'
})
export class ModalAprovarComponent {
  constructor(public dialogRef: MatDialogRef<ModalAprovarComponent>) {}

  ngOnInit(): void { 
  }
  fechar(): void {
    this.dialogRef.close();
  }
}
