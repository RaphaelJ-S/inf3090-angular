import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MagasinerComponent } from './magasiner/magasiner.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContactComponent } from './contact/contact.component';
import { PieddepageComponent } from './pieddepage/pieddepage.component';
import { AppRoutingModule } from './app-routing.module';
import { StatutComponent } from './statut/statut.component';
import { AchatComponent } from './achat/achat.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MagasinerComponent,
    PaiementComponent,
    ContactComponent,
    PieddepageComponent,
    StatutComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
