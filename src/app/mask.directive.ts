import { AfterContentInit, Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective implements AfterContentInit {

  constructor(public el: ElementRef) {}

  ngAfterContentInit(): void {
    ($(this.el.nativeElement) as any).mask('00/00/0000', { placeholder: '__/__/____' });
  }

}
