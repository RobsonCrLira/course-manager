import { Component, Input, OnChanges } from "@angular/core";
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;// Não precisa entender o porque deste calculo
    }

    faStar = faStar; // monstra a estrela.
}