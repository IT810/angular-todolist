import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path:"",
    component: TodoListComponent
  },
  {
    path:"**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
