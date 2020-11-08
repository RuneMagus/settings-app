import { ODataFilter } from 'odata-data-source';

export class TextFilter implements ODataFilter {
    value: string;

    public constructor(private readonly column: string) {
        this.value = '';
    }
    
    getFilter(): object {
        const filter = {};

        filter[this.column] = { contains: this.value };
        
        return filter;
    }

    getDescription() {
        if (!this.value) {
            return null;
        }

        return `contains '${this.value}'`;        
    }
}