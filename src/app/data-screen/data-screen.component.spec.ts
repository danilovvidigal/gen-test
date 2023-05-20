import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataScreenComponent } from "./data-screen.component";
import { SnackBarService } from "./data-screen-service/data-screen.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";

describe("DataScreenComponent", () => {
  let component: DataScreenComponent;
  let fixture: ComponentFixture<DataScreenComponent>;
  let snackBarService: SnackBarService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    const snackBarSpyObj = jasmine.createSpyObj("MatSnackBar", ["open"]);

    await TestBed.configureTestingModule({
      declarations: [DataScreenComponent],
      providers: [
        SnackBarService,
        { provide: MatSnackBar, useValue: snackBarSpyObj },
      ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    snackBarService = TestBed.inject(SnackBarService);
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should open success message", () => {
    const message = "Test success message";
    snackBarSpy.open.and.callThrough();

    snackBarService.openSuccessMessage(message);

    expect(snackBarSpy.open).toHaveBeenCalledWith(message, "Fechar", {
      duration: 3000,
    });
  });
});
