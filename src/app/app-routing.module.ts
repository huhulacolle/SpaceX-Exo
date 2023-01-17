import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeCapsulesComponent } from './components/se-capsules/se-capsules.component';
import { SeeLaunchesComponent } from './components/see-launches/see-launches.component';

const routes: Routes = [
  { path: 'see-lauches', component: SeeLaunchesComponent },
  { path: 'see-capsules', component: SeCapsulesComponent },
  { path: 'see-detail/:id', component:  SeCapsulesComponent},
  { path: '', pathMatch: 'full', redirectTo: 'see-lauches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
