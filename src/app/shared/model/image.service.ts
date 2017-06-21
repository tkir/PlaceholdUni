import {Injectable} from '@angular/core';

import {ApiService} from '../api.service';
import {Observable} from "rxjs";

@Injectable()
export class ImageService {
    private path: string = '/';

    constructor(public _api: ApiService) {
    }

    getImage(url: string = '100x100'): Observable<any> {
        return this._api.get(`${this.path}${url}`);
    }
}