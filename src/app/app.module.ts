import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FoodComponent } from './Food/food.component';
import { EmployeeComponent } from './employees/employee.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent ,
       MyMenuComponent,
       FoodComponent,
       EmployeeComponent,
       AboutComponent,
       ContactComponent,
FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
