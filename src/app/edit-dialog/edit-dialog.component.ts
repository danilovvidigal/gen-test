import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DisplayDataComponent } from "../display-data/display-data.component";

// Interface created to specify data type to be used with MAT_DIALOG_DATA inside the constructor
export interface ItemData {
  id: string;
  userId: string;
  title: string;
  body: string;
}

@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.css"],
})
export class EditDialogComponent implements OnInit {
  id: string = "";
  userId: string = "";
  title: string = "";
  body: string = "";

  constructor(
    public dialogRef: MatDialogRef<DisplayDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemData,
    public router: Router,
    
  ) {}

  dataFromItem = this.data;

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // criar um resolve em data screen para obter os dados passados nessa rota
  goToDataScreenPage() {
    // Sending data using router object methods, pointing to which component it should go and sending data that is needed.
    this.router.navigate(["data-screen", this.dataFromItem.id]);
    this.dialogRef.close();
  }
}
