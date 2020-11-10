import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NumberFilter } from './number-filter.model';
import { ColumnFilter } from 'material-dynamic-table';

@Component({
    selector: 'ld-number-filter',
    templateUrl: './number-filter.component.html'
})
export class NumberFilterComponent implements OnInit {
    model: NumberFilter;
    displayName: string;

    public constructor(
        private readonly dialogRef: MatDialogRef<NumberFilterComponent>,
        @Inject(MAT_DIALOG_DATA) private readonly filterData: ColumnFilter) { }

    ngOnInit(): void {
        this.displayName = this.filterData.column.displayName;
        this.model = this.filterData.filter || new NumberFilter(this.filterData.column.name);
    }

    apply(): void {
        if (this.model.value) {
            this.dialogRef.close(this.model);
        } else {
            this.dialogRef.close('');
        }
    }
}
