import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ImageService} from "../shared/model/image.service";

@Component({
  selector: 'app-colored',
  templateUrl: './colored.component.html',
  styleUrls: ['./colored.component.css']
})
export class ColoredComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  img360x120: string = '';
  img100x100: string = '';
  img250x100: string = '';

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.subs.push(this.imageService.getImage('360x120/18bc9c')
      .subscribe(res => this.img360x120 = res.url));
    this.subs.push(this.imageService.getImage('100x100/8a2be2/deb887')
      .subscribe(res => this.img100x100 = res.url));
    this.subs.push(this.imageService.getImage('250x100/d2691e/4b0082')
      .subscribe(res => this.img250x100 = res.url));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.forEach(s => s.unsubscribe());
      this.subs = [];
    }
  }
}
