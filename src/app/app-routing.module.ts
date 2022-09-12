import { NgModule } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path:'child',
    component:ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
