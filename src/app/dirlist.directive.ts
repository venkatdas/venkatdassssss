import { Directive ,ElementRef,Input,OnInit,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirlist]'
})
export class DirlistDirective {
  // private _defaultColor='red';

  @Input() appDirlist='';
  constructor(private elRef: ElementRef,private render:Renderer2) { 
    // elRef.nativeElement.style.background="Yellow";
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.elRef.nativeElement, 'background-color','blue')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.elRef.nativeElement, 'background-color','')
  }
private changeColor(color:string){
  this.elRef.nativeElement.style.backgroundColor=color;

}
  
}
