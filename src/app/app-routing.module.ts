import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerieComponent } from './galerie/components/galerie/galerie.component';
import { PrestationComponent } from './prestation/components/prestation/prestation.component';
import { AproposComponent } from './apropos/components/apropos/apropos.component';
import { ContactComponent } from './contact/components/contact/contact.component';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static readonly routes: Routes = [
    { path: 'galerie', component: GalerieComponent },
    { path: 'prestation', component: PrestationComponent },
    { path: 'apropos', component: AproposComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/galerie', pathMatch: 'full' },
  ]
 }
