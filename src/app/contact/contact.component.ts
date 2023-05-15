import { Component,OnInit } from "@angular/core";
@Component({
    selector:'contact',
    styleUrls:['./contact.css'],
    templateUrl:'./Contact.html'

})
export class ContactComponent implements OnInit{
 name!: string;
ngOnInit(): void {
this.name = "Input Your Email"

}
constructor(){
}
}