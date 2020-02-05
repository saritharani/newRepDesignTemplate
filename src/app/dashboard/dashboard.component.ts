import { Component, ViewChild, OnInit } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];
  // public config: SwiperConfigInterface = {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   keyboard: true,
  //   mousewheel: true,
  //   scrollbar: false,
  //   navigation: true,
  //   pagination: false
  // };


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
