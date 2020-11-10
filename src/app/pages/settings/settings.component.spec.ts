import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SettingsComponent } from './settings.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { SpyHelper } from 'src/test-support/spyHelper';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  // Can't use HttpClientTestingController as we have no subscription
  // (used within ODataDataSource), so the call is not triggered.
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpMock = SpyHelper.createMagicalMock<HttpClient>(HttpClient);

    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [ HttpClientTestingModule ]
    });
    TestBed.overrideProvider(HttpClient, { useValue: httpMock });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    httpMock.get.and.returnValue(of(new Observable<any>()));
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the expected http resource with filter when filter changes', () => {
    /*
    This test fails, the expectation on httpMock is not called. This is likely down to timing
    as calling the httpClient in the init causes a pass.
    A drawback of using the included libraries is that they do a lot for us, which is good,
    but it makes testing more complicated.
    Things to do:
      1. Mock the filter dialogs and trigger a change, which should bubble on down to the HttpClient
      and call it with the expected url args.
      2. Look at mocking ColumnFilterService with similar intents
    */
    expect(httpMock.get.calls.mostRecent().args[0]).toBe(`${environment.settingsUrl}?$top=5&$skip=0&$count=true`);
  });
});
