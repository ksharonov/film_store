import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmHttp} from '../../http/film.http';
import {ID_FILM_PARAM} from '../../interfaces/imbd-query.interface';
import {IImbdServerResponseInterface} from '../../interfaces/imdb-server-response.interface';
import {IImbbListFilmInterface} from '../../interfaces/imdb-list-film.interface';
import {initModel} from '../../system/model';
import {map} from 'rxjs/internal/operators';
import {FilmModel} from '../../models/film.model';
import {ImdbItemFilmInterface} from '../../interfaces/imdb-item-film.interface';

@Component({
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.sass']
})
export class ItemComponent {
    public id: string;
    public title = 'Список фильмов';
    public item: FilmModel;

    constructor(private route: ActivatedRoute,
                private film: FilmHttp) {
        this.route.params.subscribe((res) => {
            this.id = res['id'] || null;
            this.getFilm();
        });
    }

    /**
     * Получить фильмы
     * @return {Subscription}
     */
    public getFilm() {
        return this.film
            .getModel(this.id)
            .pipe(map((res: object) => {
                return initModel(res, FilmModel);
            }))
            .subscribe((res: FilmModel) => {
               this.item = res;
            });
    }
}
