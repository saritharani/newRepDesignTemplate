import { Component, OnInit,ViewChild } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public show: boolean = true;
  public type: string = 'component';

  public disabled: boolean = false;

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    autoplay: false,
    scrollbar: false,
    navigation: false,
    pagination: this.pagination
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef: SwiperDirective;
  constructor() { }

  ngOnInit() {

  }
  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

}
