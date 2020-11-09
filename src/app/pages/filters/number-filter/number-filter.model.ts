import { ODataFilter } from 'odata-data-source';

export class NumberFilter implements ODataFilter {
    value: number;

    public constructor(private readonly column: string) {
    }
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    getFilter(): object {
        const filter = {};

        filter[this.column] = { eq: this.value };
        
        return filter;
    }
}
