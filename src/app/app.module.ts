import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { UserComponent } from './components/user/user.component';
import { EventComponent } from './components/event/event.component';

const appRoutes: Routes = [
  //{path:'', component:},
  {path:'user', component:UserComponent},
  {path:'event', component:EventComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }