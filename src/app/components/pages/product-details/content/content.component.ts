import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import shop from '../../../../data/shop/shop.json';
import authors from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public shopdetails = shop;
  public authors = authors;

  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public setPost(id: any) {
    this.shopdetails = shop.filter((item: { id: any; }) => { return item.id == id });
  }
  // Increment decrement
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    focusOnSelect: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    asNavFor: '.slick-thumbs'
  };
  settingsThumb = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 6000,
    focusOnSelect: true,
    asNavFor: '.product-gallery-slider',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      }
    ]
  };

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
