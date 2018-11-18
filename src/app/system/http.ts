import {Observable} from 'rxjs';
import {HttpService} from '../services/http.service';
import {ID_FILM_PARAM, IImbdQueryInterface, TYPE_PARAM} from '../interfaces/imbd-query.interface';
import {IImbdServerResponseInterface} from '../interfaces/imdb-server-response.interface';
import {tap, map} from 'rxjs/internal/operators';

const SERVER_API_NAME: string = 'http://www.omdbapi.com/';

/**
 * Базовая модель
 */
export abstract class Http {
    protected url: string = SERVER_API_NAME;
    protected path: string;
    protected http: HttpService;
    protected defaultQuery: IImbdQueryInterface = {
        apikey: 'cfa4780e'
    };
    private _query: IImbdQueryInterface = {};

    public constructor() {
    }

    /**
     * Получение данных
     * @returns {Observable<Object>}
     */
    public getModels(): Observable<Object> {
        const options: any = {
            params: this._query,
            withCredentials: false
        };
        return this.http
            .get(this.url + this.path, options);
    }

    /**
     * Получение одного элемента
     * @param {number} id
     * @return {Observable<Object>}
     */
    public getModel(id: string): Observable<Object> {
        this._query = this.defaultQuery;
        this.setQuery({
            [ID_FILM_PARAM]: id,
        });
        return this.getModels();
    }

    /**
     * Устанавливаем параметры запроса
     * @param {object} query
     * @return {this}
     */
    public setQuery(query: object): this {
        this._query = {
            ...this._query,
            ...query,
            ...this.defaultQuery,
        };
        return this;
    }
}
