import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  viewMode:string='account';


//   OnlyNumbersAllowed(event):boolean{
// const charCode=(event.which)?event.which:event.keyCode;
// if({

// })

//     return true;
//   }
// mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
changeViewMode(mode:string){
  this.viewMode=mode;
 }
}


