import {Component, OnInit, OnDestroy,} from '@angular/core';
import {Subscription} from "rxjs";

import {TextService} from "../shared/model/text.service";

@Component({
    selector: 'app-list',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit,OnDestroy {
    private subs: Subscription = null;
    text: string = "";

    constructor(private textService: TextService) {
    }

    ngOnInit(): void {
        this.subs = this.textService.getLoremText()
            .subscribe(resp => this.text = resp);
    }

    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
            this.subs = null;
        }
    }

}
