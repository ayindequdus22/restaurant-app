import { Component, OnInit } from "@angular/core";
@Component({
    selector:'nav-bar',
templateUrl:`./navbar.html`,
styleUrls:['./navbar.css']
})
export class NavbarComponent implements OnInit{
   
    ngOnInit():void{
    
               window.addEventListener('scroll',function(){
            if(scrollY > 80){
                        document.querySelector('header')?.classList.add('active')
                    }
                    else{
                        document.querySelector('header')?.classList.remove('active')
                    }
                      document.querySelector('.search-form')?.classList.remove('active')
        },
        );  
    }
   search(){
        document.querySelector('.search-form')?.classList.toggle('active');
        document.querySelector('nav')?.classList.remove('active')
        document.querySelector('.nav-btn')?.classList.remove('fa-times')

    } 
    // this.active = true;
    addActive(){
        document.querySelector('nav')?.classList.toggle('active')
    document.querySelector('.search-form')?.classList.remove('active')

        document.querySelector('.nav-btn')?.classList.toggle('fa-times')
    }
 
//    if(document.querySelector('nav')?.classList.contains('active')){

// };
    
    constructor(){
 
 }
}
