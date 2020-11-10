import { ColumnConfig } from 'material-dynamic-table';

export class ColumnConfigs {

    static columns: ColumnConfig[] = [
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
  ];

/*
// Use these with settingsUrl: 'https://services.odata.org/V4/OData/OData.svc/Products'
// in the environment settings to see filtering in action with an endpoint that
// implements the functionality


    static columns: ColumnConfig[] = [
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
*/
}
