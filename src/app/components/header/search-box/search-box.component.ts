import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public searchTerm: string = '';

    public constructor(private router: Router) {}

    public async searchSubmitHandler(): Promise<void> {
        await this.router.navigate(['/search'], {
            queryParams: {search_term: this.searchTerm, order: 'popular'},
            queryParamsHandling: 'merge',
        });
    }
}
