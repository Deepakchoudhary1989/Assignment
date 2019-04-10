import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DisplayOneComponent } from './display-one/display-one.component';
import { DisplayTwoComponent} from './display-two/display-two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyEditorComponent } from './policy-editor/policy-editor.component';


const routes: Routes = [{path: '',component:DashboardComponent},
                        {path: 'displayone',component: DisplayOneComponent},
                      {path:'policyeditor',component: PolicyEditorComponent}];

  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 

export class AppRoutingModule { }