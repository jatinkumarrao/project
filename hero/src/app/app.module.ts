import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';

import{HeroService} from './shared/hero.service';
import{FormsModule} from '@angular/forms';

const appRoutes: Routes = [
{path:'',component:ListComponent},
{path:'createUpdate',component:CreateUpdateComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateUpdateComponent
  ],
  imports: [
  HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
