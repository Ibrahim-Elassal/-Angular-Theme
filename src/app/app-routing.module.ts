import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch:'full'} ,
  {path: 'home' , component: HomeComponent} ,
  {path: 'portfolio' , component: PortfoiloComponent} ,
  {path: 'about' , component: AboutComponent} ,
  {path: 'contact' , component: ContactComponent } ,
  {path: '**' , component: NotfoundComponent} ,
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  
  ],
})
export class AppRoutingModule { }
