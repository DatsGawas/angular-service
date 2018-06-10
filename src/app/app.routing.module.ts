/**
 * Created by dattaram on 10/6/18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {EditReaderComponent} from "./edit-reader/edit-reader/edit-reader.component";
import {EditBookComponent} from "./edit-book/edit-book/edit-book.component";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'book/:id', component: EditBookComponent},
  {path: 'reader/:id', component: EditReaderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule],
})
  export class AppRoutingModule {
}

