import {Component, OnInit, OnDestroy} from '@angular/core';
import {ImageService} from "../shared/model/image.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-monochrome',
    templateUrl: './monochrome.component.html',
    styleUrls: ['./monochrome.component.css']
})
export class MonochromeComponent implements OnInit, OnDestroy {
    private subs: Subscription = null;

    constructor(private imageService: ImageService) {
    }

    ngOnInit() {
        this.subs = this.imageService.getImage('200x200')
            .subscribe(res => console.log(res));
    }

    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
            this.subs = null;
        }
    }
}
