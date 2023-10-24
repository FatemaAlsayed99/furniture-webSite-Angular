import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective {
@Input()  radius1:string='scale(1.1)';
@Input('ImgStyle')  radius2:string='scale(1)';

  constructor(private elementRef: ElementRef) { 
     this.elementRef.nativeElement.style.transition = 'transform 0.3s';
    this.elementRef.nativeElement.style.borderRadius ="20px" ;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.transform = `${this.radius1}`;
    this.elementRef.nativeElement.style.boxShadow = '0 0 10px gray';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.transform = `${this.radius2}`;
    this.elementRef.nativeElement.style.boxShadow = '';
  }
}
