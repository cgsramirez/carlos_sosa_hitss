import { Directive, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActiveModule]'
})
export class ActiveModuleDirective {

  @ViewChild('templateRefName') el: ElementRef | undefined;

  constructor(private renderer: Renderer2) { 
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.el?.nativeElement, 'background', 'yellow');
  }

}
