import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  courseData=[
    {
      course_name:"HTML", 
      lession:[
        {name: "HTML Introduction", content:["HTML Intro", "Why use"]},
        {name: "HTML Div Tag", content:["How to set border", "How to color div"]},
        {name: "HTML Tables", content:["Table heading", "Table body"]},
      ]
    },
    {
      course_name:"JavaScript", 
      lession:[
        {name: "JavaScript Introduction", content:["JavaScript Intro", "Why use"]},
        {name: "JavaScript Syntax", content:["How to write syntex", "How to write code"]},
        {name: "JavaScript Variables", content:["Variable define", "Variable Scope"]},
      ]
    }
  ]

  // courseData=[
  //   {
  //     course_name:"HTML", 
  //     lession:[
  //       "Introduction", {content:["HTML Intro", "Why use"]},
  //       "Div Tag", {content:["How to set border", "How to color div"]},
  //       "Tables", {content:["Table heading", "Table body"]}
  //     ]
  //   },
  //   {
  //     course_name:"JavaScript", 
  //     lession:[
  //       "Introduction", {content:["JavaScript Intro", "Why use"]},
  //       "Syntax", {content:["How to write syntex", "How to write code"]},
  //       "Variables", {content:["Variable define", "Variable Scope"]}
  //     ]
  //   }
  // ]
  

}//class close
