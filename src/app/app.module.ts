import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CheldrenComponent } from './cheldren/cheldren.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkingHoursPipe } from './working-hours.pipe'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTreeModule} from "@angular/material/tree";
import {FormService} from "./service/form.service";
import { UserInfoComponent } from './user-info/user-info.component';
import {NotificationsService} from "./service/notifications.service";
import { AddComponent } from './user-info/add/add.component';
import { EditComponent } from './user-info/edit/edit.component';
import { InfoComponent } from './user-info/info/info.component';
import { ListComponent } from './user-info/list/list.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    CheldrenComponent,
    ContactsComponent,
    PageNotFoundComponent,
    WorkingHoursPipe,
    UserInfoComponent,
    AddComponent,
    EditComponent,
    InfoComponent,
    ListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatProgressBarModule,
        MatTooltipModule,
      MatSnackBarModule,
        MatTreeModule
    ],
  providers: [FormService,NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
