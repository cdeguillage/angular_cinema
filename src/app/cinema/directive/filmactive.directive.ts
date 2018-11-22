import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[filmActive]'
})
export class FilmactiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground('white');

  }

  setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
