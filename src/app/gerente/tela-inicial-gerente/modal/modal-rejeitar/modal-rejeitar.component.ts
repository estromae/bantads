import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-rejeitar',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './modal-rejeitar.component.html',
  styleUrl: './modal-rejeitar.component.css'
})
export class ModalRejeitarComponent {
  constructor(public dialogRef: MatDialogRef<ModalRejeitarComponent>) {}

  ngOnInit(): void { 
  }
  fechar(): void {
    this.dialogRef.close();
  }
}
