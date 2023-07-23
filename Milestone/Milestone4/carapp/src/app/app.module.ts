import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { DeleteCarsComponent } from './delete-cars/delete-cars.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { DisplayCarsComponent } from './display-cars/display-cars.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,
    CreateCarsComponent,
    DeleteCarsComponent,
    EditCarsComponent,
    DisplayCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
