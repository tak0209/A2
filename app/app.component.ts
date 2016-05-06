import {Component} from "angular2/core";

@Component ({
    selector: "pm-app",
    template: `
        <div><H2>{{pageTitle}}</H2>
        </div>
    `
})
export class AppComponent{
    public pageTitle:string = "ACME Application";    
}