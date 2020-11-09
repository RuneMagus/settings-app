import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SettingsComponent } from './settings.component';
import { HttpClient } from '@angular/common/http';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let httpMock: HttpTestingController;
  //let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [ HttpClientTestingModule ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    TestBed.compileComponents();

    
    //httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    //httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the expected http resource when created', () => {
    const req = httpMock.expectOne('https://services.odata.org/V4/OData/OData.svc/Products');
  });
});
