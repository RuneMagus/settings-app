import { ODataFilter } from 'odata-data-source';

export class TextFilter implements ODataFilter {
    value: string;

    public constructor(private readonly column: string) {
        this.value = '';
    }
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    getFilter(): object {
        const filter = {};

        filter[this.column] = { contains: this.value };
        
        return filter;
    }
}
