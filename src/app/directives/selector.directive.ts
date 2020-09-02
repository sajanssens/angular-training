import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective {
  @Input('appSelector') bgcolor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e) {
    const t = e.target;
    if (t.tagName === 'TD') {
      t.style.backgroundColor = this.bgcolor;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) {
    const t = e.target;
    console.log(t);
    
    if (t.tagName === 'TD') {
      t.style.backgroundColor = null;
    }
  }
}
