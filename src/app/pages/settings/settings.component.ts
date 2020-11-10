import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnFilterService } from 'material-dynamic-table';
import { ODataDataSource } from 'odata-data-source';
import { DateFilterComponent } from '../filters/date-filter/date-filter.component';
import { NumberFilterComponent } from '../filters/number-filter/number-filter.component';
import { TextFilterComponent } from '../filters/text-filter/text-filter.component';
import { environment } from '../../../environments/environment';
import { ColumnConfigs } from 'src/app/models/column-configs.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [ColumnFilterService, HttpClient]
})
export class SettingsComponent implements OnInit {

  dataSource: ODataDataSource;

  title = 'Settings';

  columns = ColumnConfigs.columns;

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
