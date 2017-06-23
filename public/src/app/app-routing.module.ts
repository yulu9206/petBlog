import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent  } from './login/login.component';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: NewComponent },
  // { path: 'edit/:id', component: EditComponent},
  { path: 'show/:id', component: ShowComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
