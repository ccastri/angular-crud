import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// npm install json-server
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PeopleComponent } from './components/people/people.component';

import { PeopleItemComponent } from './components/people-item/people-item.component';
import { AddPeopleComponent } from './components/add-people/add-people.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes=[
  {path: '', component:PeopleComponent},
  {path: 'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PeopleComponent,

    PeopleItemComponent,
     AddPeopleComponent,
     AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
