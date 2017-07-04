import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './components/home/home.component';
import { ProfileComponent  } from './components/profile/profile.component';
import { AuthGuardService } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowComponent } from './components/show/show.component';
import { NewComponent } from './components/new/new.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'new', component: NewComponent, canActivate: [AuthGuardService] },
  { path: 'blogs', component: DashboardComponent, canActivate: [AuthGuardService] },
  // { path: 'edit/:id', component: EditComponent},
  { path: 'show/:id', component: ShowComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
