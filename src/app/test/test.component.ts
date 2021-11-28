import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

 
  title :string="list of Languages do speak:  ";
  courses: string[]=['Telugu','English','Kannada','Hindi'];
 
  color='';

}
