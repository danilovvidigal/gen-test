import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DisplayDataComponent } from "./display-data.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialogModule } from "@angular/material/dialog";

describe("DisplayDataComponent", () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayDataComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
