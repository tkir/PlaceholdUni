import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs";

import {ApiService} from '../api.service';

@Injectable()
export class TextService {
    private path: string = '/text';

    constructor(public _api: ApiService) {
    }

    private getText(resp: Response) {
        return resp.text();
    }

    getLoremText(url: string = ''): Observable<string> {
        return this._api.get(`${this.path}${url}`)
            .map(resp => this.getText(resp));
    }
}
