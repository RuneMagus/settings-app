import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnFilter } from 'material-dynamic-table';
import { SpyHelper } from 'src/test-support/spyHelper';

import { DateFilterComponent } from './date-filter.component';

describe('DateFilterComponent', () => {
  let component: DateFilterComponent;
  let fixture: ComponentFixture<DateFilterComponent>;
  let matDialogRefMock: jasmine.SpyObj<MatDialogRef<DateFilterComponent>>;
  let filterData: ColumnFilter;

  beforeEach(async () => {
    matDialogRefMock = SpyHelper.createMagicalMock<MatDialogRef<DateFilterComponent>>(MatDialogRef);
    filterData = { 
      column: {
        name: 'Name',
        displayName: 'Display Name',
        type: 'string'
      }
    } as ColumnFilter;
    TestBed.configureTestingModule({
      declarations: [DateFilterComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: filterData }]
    })
    TestBed.overrideProvider(MatDialogRef, { useValue: matDialogRefMock })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
