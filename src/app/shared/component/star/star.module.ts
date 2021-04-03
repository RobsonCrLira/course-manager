import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        FontAwesomeModule
    ],
    exports: [
        StarComponent,
    ]
})
export class StarModule {

}