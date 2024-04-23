import { Component, Inject, Injectable, Input } from '@angular/core';
import { MatDialog,  MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-transacao',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css',
  providers: [MatDialog]
})
export class TransacaoComponent {

  @Input() modalTitle?: string;
  transactionAmount?: number;

  
  constructor(public dialog: MatDialog) {}

  closeModal(): void {
  }

  performTransaction(): void {
  }
}
