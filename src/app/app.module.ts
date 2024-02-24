import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { GalerieComponent } from './galerie/components/galerie/galerie.component';
import { PrestationComponent } from './prestation/components/prestation/prestation.component';
import { AproposComponent } from './apropos/components/apropos/apropos.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalerieComponent,
    MenuComponent,
    GalerieComponent,
    PrestationComponent,
    AproposComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MdbCarouselModule,
    MatFormFieldModule,
    FormsModule, 
    MatFormFieldModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
