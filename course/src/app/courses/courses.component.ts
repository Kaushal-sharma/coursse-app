import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //Take data from app components
  @Input() item:any
  @Output() courseEmitt = new EventEmitter<any>()
  course_data:any;
  

  constructor() {}

  ngOnInit(): void {
  
  }

  onSelectCourse(course:any){
    console.log("Course:", course);
    this.courseEmitt.emit(course)
  }

}
