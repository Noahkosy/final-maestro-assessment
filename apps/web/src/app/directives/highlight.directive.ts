import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[nxlpHighlight]'
})
export class HighlightDirective {

  constructor( private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() nxlpHighlight: string;

  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.nxlpHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
}
