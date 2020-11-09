import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnFilter } from 'material-dynamic-table';
import { SpyHelper } from 'src/test-support/spyHelper';

import { NumberFilterComponent } from './number-filter.component';

describe('NumberFilterComponent', () => {
  let component: NumberFilterComponent;
  let fixture: ComponentFixture<NumberFilterComponent>;
  let matDialogRefMock: jasmine.SpyObj<MatDialogRef<NumberFilterComponent>>;
  let filterData: ColumnFilter;

  beforeEach(async() => {
    matDialogRefMock = SpyHelper.createMagicalMock<MatDialogRef<NumberFilterComponent>>(MatDialogRef);
    filterData = { 
      column: {
        name: 'Name',
        displayName: 'Display Name',
        type: 'string'
      }
    } as ColumnFilter;

    TestBed.configureTestingModule({
      declarations: [ NumberFilterComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: filterData }]
    })
    TestBed.overrideProvider(MatDialogRef, { useValue: matDialogRefMock })
    .compileComponents();    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
