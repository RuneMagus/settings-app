import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnConfig, ColumnFilterService } from 'material-dynamic-table';
import { ODataDataSource } from 'odata-data-source';
import { DateFilterComponent } from '../filters/date-filter/date-filter.component';
import { NumberFilterComponent } from '../filters/number-filter/number-filter.component';
import { TextFilterComponent } from '../filters/text-filter/text-filter.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [ColumnFilterService]
})
export class SettingsComponent implements OnInit {

  dataSource: ODataDataSource;

  title = 'Settings';

  /* columns: ColumnConfig[] = [
    {
      name: 'Id',
      displayName: 'Id',
      type: 'number'
    },
    {
      name: 'Section',
      displayName: 'Section',
      type: 'string'
    },
    {
      name: 'Key',
      displayName: 'Key',
      type: 'string'
    },
    {
      name: 'Value',
      displayName: 'Value',
      type: 'string'
    },
    {
      name: 'UpdateBy',
      displayName: 'Update By',
      type: 'string'      
    },
    {
      name: 'UpdateDate',
      displayName: 'Update Date',
      type: 'date'      
    }
  ]; */
  
  columns: ColumnConfig[] = [
    {
      name: 'Name',
      displayName: 'Product',
      type: 'string'
    },
    {
      name: 'Description',
      displayName: 'Description',
      type: 'string'
    },
    {
      name: 'ReleaseDate',
      displayName: 'Release Date',
      type: 'date'
    },
    {
      name: 'Rating',
      displayName: 'Rating',
      type: 'number'
    },
    {
      name: 'Price',
      displayName: 'Price',
      type: 'number'      
    }
  ];

  constructor(private readonly httpClient: HttpClient, 
    private readonly columnFilterService: ColumnFilterService) {
    columnFilterService.registerFilter('string', TextFilterComponent);
    columnFilterService.registerFilter('date', DateFilterComponent);
    columnFilterService.registerFilter('number', NumberFilterComponent);
  }
  
  ngOnInit(): void {
    this.dataSource = new ODataDataSource(this.httpClient, environment.settingsUrl);
  }

}
