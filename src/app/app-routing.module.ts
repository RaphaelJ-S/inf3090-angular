import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achat/achat.component';
import { ContactComponent } from './contact/contact.component';
import { MagasinerComponent } from './magasiner/magasiner.component';
import { PaiementComponent } from './paiement/paiement.component';
import { StatutComponent } from './statut/statut.component';

const routes: Routes = [
  { path:'magasiner', component: MagasinerComponent },
  { path:'commander', component: AchatComponent },
  { path:'contact', component: ContactComponent },
  { path: '', redirectTo:'/magasiner', pathMatch: 'full' },
  { path: 'gerant', redirectTo:'/contact', pathMatch: 'full' },
  { path:'paiement', component: PaiementComponent },
  { path:'statut', component: StatutComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
