import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReadComponent } from './read/read.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PopupComponent } from '../popup/popup.component';

@NgModule({
  declarations: [
    HomeComponent, 
    ReservationComponent, 
    ReadComponent, 
    EditComponent, 
    DeleteComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents:[
    PopupComponent
  ]
})
export class HomeModule { }
