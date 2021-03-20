import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: forms',
                imageUrl: '',
                price: 99.99,
                code: 'SDF-5486',
                duration: '120',
                rating: 5.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTPS',
                imageUrl: '',
                price: 45.99,
                code: 'DFS-5486',
                duration: '80',
                rating: 5.9,
                releaseDate: 'December, 20, 2019'
            }
        ]
    }

}