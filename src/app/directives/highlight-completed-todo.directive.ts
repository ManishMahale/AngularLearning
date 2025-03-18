import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {

  IsCompleted = input(false);
  constructor() { }
el = inject(ElementRef)
  stylesEffect = effect(()=>{
    if(this.IsCompleted())
    {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgrundColor ='#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgrundColor ='#fff';
      this.el.nativeElement.style.color = '#000';
    }
  })
}
