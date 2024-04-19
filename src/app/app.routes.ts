import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule


import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';


export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-task',component:AddTaskComponent},
  { path: 'update-task/:id',component: UpdateTaskComponent},
  {path:'**',component:NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
