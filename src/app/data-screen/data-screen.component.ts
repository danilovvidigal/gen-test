import { GetDataService } from "services/get-data.service";
import { ItemDto } from "./../shared/item.model";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Validators } from "@angular/forms";
import { SnackBarService } from './data-screen-service/data-screen.service';  

@Component({
  selector: "app-data-screen",
  templateUrl: "./data-screen.component.html",
  styleUrls: ["./data-screen.component.css"],
})
export class DataScreenComponent implements OnInit {
  itemDto!: ItemDto[];
  form!: FormGroup;

  @ViewChild("titleData") titleData: ElementRef<HTMLInputElement> | undefined;
  @ViewChild("bodyData") bodyData: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: GetDataService,
    private location: Location,
    private snackBar: MatSnackBar,
    private snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.itemDto = this.route.snapshot.data.item;
    if (this.itemDto && this.itemDto.length > 0) {
      this.form = new FormGroup({
        id: new FormControl(this.itemDto[0].id || null),
        userId: new FormControl(this.itemDto[0].userId || null),
        dataTitle: new FormControl(
          this.itemDto[0].title || null,
          Validators.required
        ),
        dataBody: new FormControl(
          this.itemDto[0].body || null,
          Validators.required
        ),
      });
    }
  }
  

  getItemById(id: number) {
    this.dataService
      .getDataById(id)
      .subscribe((response) => (this.itemDto = response));
  }

  revertChanges(form: FormGroup) {
    form.get("dataTitle")?.setValue(null);
    form.get("dataBody")?.setValue(null);
  }

  aapplyChanges() {
    if (this.form.valid) {
      this.dataService.putData(this.form.value).subscribe({
        next: (result) => {
          console.log(JSON.stringify(result));
          this.snackBarService.openSuccessMessage('Edição concluída com sucesso!');
        },
        error: (_error) => {
          this.snackBarService.openErrorMessage('Algo deu errado, contate o suporte!');
        },
        complete: () => {
          this.location.back();
        },
      });
    } else {
      this.snackBarService.openErrorMessage('Preencha todos os campos obrigatórios');
    }
  }
  error(mensagem: string) {
    this.snackBar.open(mensagem, "Fechar", {
      duration: 3000,
    });
  }
}
