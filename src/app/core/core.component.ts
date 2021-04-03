import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error404/error404.component";
import { NavbarComponent } from "./component/navbar/nav-bar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}