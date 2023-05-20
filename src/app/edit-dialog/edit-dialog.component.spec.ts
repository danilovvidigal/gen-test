import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EditDialogComponent } from "./edit-dialog.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";


describe("EditDialogComponent", () => {

  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  const dialogMock = {
    close: () => { }
   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [
        RouterTestingModule,
        MatDialogModule    
      ],
      providers: [
        {provide: MatDialogTitle, useValue: {}},
         {provide: MatDialogRef, useValue: dialogMock},
         {provide: MAT_DIALOG_DATA, useValue: []}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
