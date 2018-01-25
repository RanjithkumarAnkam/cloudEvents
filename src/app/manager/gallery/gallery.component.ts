import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

 
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  showImgs: boolean = false;
  isButtonACt: boolean = false;
  venueValue: string;
  galleryVideos: Array<any>;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };
  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '1000px',
        height: '650px',
        thumbnailsColumns: 4
      }
    ]
    this.galleryImages = [
      {
        small: 'assets/images/d-1.jpg',
        medium: 'assets/images/d-1.jpg',
        big: 'assets/images/d-1.jpg'
      },
      {
        small: 'assets/images/d-2.jpg',
        medium: 'assets/images/d-2.jpg',
        big: 'assets/images/d-2.jpg'
      },
      {
        small: 'assets/images/d-3.jpg',
        medium: 'assets/images/d-3.jpg',
        big: 'assets/images/d-3.jpg'
      },
      {
        small: 'assets/images/d-4.jpg',
        medium: 'assets/images/d-4.jpg',
        big: 'assets/images/d-4.jpg'
      },
      {
        small: 'assets/images/d-5.jpg',
        medium: 'assets/images/d-5.jpg',
        big: 'assets/images/d-5.jpg'
      },
      {
        small: 'assets/images/d-3.jpg',
        medium: 'assets/images/d-3.jpg',
        big: 'assets/images/d-3.jpg'
      },
      {
        small: 'assets/images/d-4.jpg',
        medium: 'assets/images/d-4.jpg',
        big: 'assets/images/d-4.jpg'
      },
      {
        small: 'assets/images/d-5.jpg',
        medium: 'assets/images/d-5.jpg',
        big: 'assets/images/d-5.jpg'
      },
    ];
    this.carouselTileItems =  [
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
      {
        "videoUrl": "//www.youtube.com/embed/YE7VzlLtp-4"
      },
    ];
 
    this.carouselTile = {
      grid: {xs: 2, sm: 2, md: 2, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
    
  }
  public carouselTileLoad(evt: any) {
 
   
  }

  onVenueChange(){

  }
  searchImgs(){
    
  }
 



}




