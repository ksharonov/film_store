import {Http} from '../system/http';
import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class FilmHttp extends Http {
    protected path = '';

    constructor(protected http: HttpService) {
        super();
    }
}
