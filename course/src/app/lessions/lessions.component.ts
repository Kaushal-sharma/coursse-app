import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-lessions',
  templateUrl: './lessions.component.html',
  styleUrls: ['./lessions.component.css']
})
export class LessionsComponent implements OnInit {

  @Input() lession:any;

  @Output() back = new EventEmitter<string>();
  constructor() {
    console.log("Lession in lession components:", this.lession);
    
  }

  ngOnInit(): void {
  }

  onSelectBack(){
    this.back.emit('back')
  }



}
