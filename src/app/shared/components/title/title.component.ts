import {Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: string = '';

  constructor() { }

  ngAfterViewInit() {
    // console.log(this.second);
  }
  public toUpper(): string {
    return this.title.toUpperCase();
  }

  public toLower(): string {
    return this.title.toLowerCase();
  }

}
