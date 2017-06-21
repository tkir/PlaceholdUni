import {Component, OnInit, OnDestroy,} from '@angular/core';
import {Subscription} from "rxjs";

import {TextService} from "../shared/model/text.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {
    private subs: Subscription = null;

    res = {picture: '', width: 360, height: 230, description: ''};

    constructor(private textService: TextService) {
    }

    ngOnInit(): void {
        this.subs = this.textService.getLoremText()
            .subscribe(resp => this.res.description = resp);
    }

    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
            this.subs = null;
        }
    }
}