import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindInArrayPipe} from './find-in-array.pipe';

@NgModule({
    declarations: [FindInArrayPipe],
    exports: [FindInArrayPipe],
    imports: [CommonModule],
})
export class ArrayPipesModule {}
