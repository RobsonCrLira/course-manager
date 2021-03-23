import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: number;

    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id'); //  o '+' na frente de 'this' serve para converter a entrada do dado em NUMBER pois ele esta recebendo o pararametro como STRING 
    }
}