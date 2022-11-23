import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'first-component', component: FirstComponent },
{ path: 'second-component', component: SecondComponent },
{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
{ path: '**', component: PageNotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
