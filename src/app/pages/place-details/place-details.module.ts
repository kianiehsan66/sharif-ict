import { GoogleMapsModule } from '@angular/google-maps';
import { SharedComponentsModule } from './../../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailsPageRoutingModule } from './place-details-routing.module';

import { PlaceDetailsPage } from './place-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    SharedComponentsModule,
    PlaceDetailsPageRoutingModule
  ],
  declarations: [PlaceDetailsPage]
})
export class PlaceDetailsPageModule { }
