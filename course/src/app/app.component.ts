import { Component, Input, Output } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course_data:any;
  lession:any;
  courseHideShow:boolean = true

  constructor(private data:CoursesService){
    console.log('Couese_name-1:', data.courseData)
    this.course_data=data.courseData
  }

  onSelectedCourse(param:any){
    console.log("Lession:", param.lession)
    this.lession = param.lession
    this.courseHideShow=false
  }

  onSelectedBack(param:any){
    if(param=='back'){
      this.courseHideShow=true
    }
    else{
      this.courseHideShow=false
    }
  }

}
