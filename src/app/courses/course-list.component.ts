import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    /*
    
    Anotação -> quando uma variavel começa com "_" é para informar há outros Devs 
    que a mesma só deve ser utilizada na classe que está.

    */
    _courses: Course[] = [];
    _filterBy: string;

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filteredCourses = this._courses;

    }


    set filterBy(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filterBy() {
        return this._filterBy;

    }


}