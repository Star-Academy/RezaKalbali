import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'findInArray',
})
export class FindInArrayPipe implements PipeTransform {
    public transform(value: any, array: any[]): boolean {
        return !!array.find((item) => item === value);
    }
}
