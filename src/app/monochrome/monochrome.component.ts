import {Component, OnInit, OnDestroy} from '@angular/core';
import {ImageService} from "../shared/model/image.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-monochrome',
  templateUrl: './monochrome.component.html',
  styleUrls: ['./monochrome.component.css']
})
export class MonochromeComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  img360x120: string = '';
  img100x100: string = '';
  img250x100: string = '';

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.subs.push(this.imageService.getImage('360x120')
      .subscribe(res => this.img360x120 = res.url));
    this.subs.push(this.imageService.getImage('100x100')
      .subscribe(res => this.img100x100 = res.url));
    this.subs.push(this.imageService.getImage('250x100')
      .subscribe(res => this.img250x100 = res.url));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.forEach(s => s.unsubscribe());
      this.subs = [];
    }
  }
}
