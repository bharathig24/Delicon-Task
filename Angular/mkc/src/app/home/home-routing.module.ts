import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:[
    { path: 'reservation', component: ReservationComponent},
    { path: 'edit', component: EditComponent},
    { path: 'read', component: ReadComponent},
    { path: 'delete', component: DeleteComponent}
  ] }
  // { path:'**', redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
