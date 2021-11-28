import { Component } from '@angular/core';
import { DayService } from './day.service';

@Component({
  selector: 'app-year-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class YearDayComponent {
  days:string="list of Weekdays";
  weeks: string[];
  
  constructor(objDayService:DayService){
    this.weeks=objDayService.getDays();
  }
}
