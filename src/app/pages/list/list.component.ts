import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FilmHttp} from '../../http/film.http';
import {SEARCH_PARAM, PAGE_PARAM, YEAR_PARAM} from '../../interfaces/imbd-query.interface';
import {IImbdServerResponseInterface} from '../../interfaces/imdb-server-response.interface';
import {IImbbListFilmInterface} from '../../interfaces/imdb-list-film.interface';
import {map} from 'rxjs/internal/operators';
import {FilmModel} from '../../models/film.model';
import {initModel} from '../../system/model';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})
export class ListComponent {
    public title = 'Список фильмов';
    public query: string = 'Star';
    public page: string = '1';
    public year: string = '2018';
    public films: Array<FilmModel>;

    constructor(private router: Router,
                private film: FilmHttp) {
        this.getFilms();
    }

    /**
     * Получить фильмы
     * @return {Subscription}
     */
    public getFilms(): void {
        this.film
            .setQuery({
                [SEARCH_PARAM]: this.query,
                [PAGE_PARAM]: this.page,
                [YEAR_PARAM]: this.year
            })
            .getModels()
            .pipe(map((res: IImbdServerResponseInterface) => {
                initModel(res.Search, FilmModel);
                return res;
            }))
            .subscribe((res: IImbdServerResponseInterface) => {
                this.films = res.Search;
            });
    }

    public onChangeQuery(event): void {
        this.query = event.target.value;
        this.getFilms();
    }

    public onChangePage(event): void {
        this.page = event.target.value;
        this.getFilms();
    }

    public onChangeYear(event): void {
        this.year = event.target.value;
        this.getFilms();
    }
}
