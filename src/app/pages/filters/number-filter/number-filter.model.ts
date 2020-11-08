import { ODataFilter } from 'odata-data-source';

export class NumberFilter implements ODataFilter {
    value: number;

    public constructor(private readonly column: string) {
    }
    
    getFilter(): object {
        const filter = {};

        filter[this.column] = { eq: this.value };
        
        return filter;
    }
}
