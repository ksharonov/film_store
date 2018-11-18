import {IImbbListFilmInterface} from './imdb-list-film.interface';
import {FilmModel} from '../models/film.model';

export interface IImbdServerResponseInterface {
    Response: string;
    Search: Array<FilmModel>;
    totalResults: string;
}