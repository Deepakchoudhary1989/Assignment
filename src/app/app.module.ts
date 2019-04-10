import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayOneComponent } from './display-one/display-one.component';
import { DisplayTwoComponent } from './display-two/display-two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { PolicyEditorComponent } from './policy-editor/policy-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayOneComponent,
    DisplayTwoComponent,
    DashboardComponent,
    PolicyEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
