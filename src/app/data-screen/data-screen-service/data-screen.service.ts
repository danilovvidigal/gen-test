import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
    constructor(public snackBar: MatSnackBar) {}

  openSuccessMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }

  openErrorMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }
}
