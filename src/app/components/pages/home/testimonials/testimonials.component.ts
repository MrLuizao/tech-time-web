import { Component, OnInit } from '@angular/core';
import testimonial from '../../../../data/testimonial.json';
import author from '../../../../data/team.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }
  public testimonial = testimonial;
  public author = author;
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  };
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    nextArrow:".testimonial-arrows .next-arrow",
    prevArrow:".testimonial-arrows .prev-arrow",
  };

  ngOnInit(): void {
  }

}
