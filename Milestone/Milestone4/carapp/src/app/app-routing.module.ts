import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { DeleteCarsComponent } from './delete-cars/delete-cars.component';
import { DisplayCarsComponent } from './display-cars/display-cars.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { ListCarsComponent } from './list-cars/list-cars.component';


const routes: Routes = [

  { path: 'create', component: CreateCarsComponent },

  { path: 'list-cars', component: ListCarsComponent },

  { path: 'display/:id', component: DisplayCarsComponent },

  { path: 'edit', component: EditCarsComponent },

  { path: 'delete', component: DeleteCarsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
