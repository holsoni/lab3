import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ChildrenOutletContexts, RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {MenComponent} from "./men/men.component";
import {WomenComponent} from "./women/women.component";
import {CheldrenComponent} from "./cheldren/cheldren.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent },
  { path: 'children', component: CheldrenComponent},
  { path: 'contacts/:id', component: ContactsComponent },
  { path: 'contacts',pathMatch: 'full', redirectTo: 'contacts/1' },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**',  component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
