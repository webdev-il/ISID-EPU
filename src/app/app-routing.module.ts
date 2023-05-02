import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MsqepageComponent } from './pages/academics/msqepage/msqepage.component';
import { NavBarRoutes, parseRoutes } from 'src/data/navigation';

const routes: Routes = parseRoutes(NavBarRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
