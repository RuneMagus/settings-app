import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnFilter } from 'material-dynamic-table';
import { SpyHelper } from 'src/test-support/spyHelper';

import { TextFilterComponent } from './text-filter.component';

describe('TextFilterComponent', () => {
  let component: TextFilterComponent;
  let fixture: ComponentFixture<TextFilterComponent>;
  let matDialogRefMock: jasmine.SpyObj<MatDialogRef<TextFilterComponent>>;
  let filterData: ColumnFilter;
  
  beforeEach(async () => {
    matDialogRefMock = SpyHelper.createMagicalMock<MatDialogRef<TextFilterComponent>>(MatDialogRef);
    filterData = { 
      column: {
        name: 'Name',
        displayName: 'Display Name',
        type: 'string'
      }
    } as ColumnFilter;
    await TestBed.configureTestingModule({
      declarations: [ TextFilterComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: filterData }]
    })
    TestBed.overrideProvider(MatDialogRef, { useValue: matDialogRefMock })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
