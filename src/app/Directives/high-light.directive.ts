import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight ='';
  constructor(private el: ElementRef) {
   }
   ngOnInit(): void {
    if(!this.appHighLight){
      this.appHighLight = 'blue';
    }
    this.el.nativeElement.style.color = this.appHighLight;
   }
}
