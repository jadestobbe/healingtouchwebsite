import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DaySpaServicesComponent } from './day-spa-services/day-spa-services.component';
import { SkinCareServicesComponent } from './skin-care-services/skin-care-services.component';
import { HairServicesComponent } from './hair-services/hair-services.component';
import { PackagesComponent } from './packages/packages.component';
import { ManicuresPedicuresComponent } from './manicures-pedicures/manicures-pedicures.component';
import { NaturalProductsStoreComponent } from './natural-products-store/natural-products-store.component';
import { PeacockCosmeticsComponent } from './peacock-cosmetics/peacock-cosmetics.component';
import { SprayTanningComponent } from './spray-tanning/spray-tanning.component';
import { SkinCareProductsComponent } from './skin-care-products/skin-care-products.component';
import { EssentialOilsComponent } from './essential-oils/essential-oils.component';
import { VitaminsComponent } from './vitamins/vitamins.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'day-spa-services', component: DaySpaServicesComponent },
  { path: 'essential-oils', component: EssentialOilsComponent },
  { path: 'hair-services', component: HairServicesComponent },
  { path: 'manicures-pedicures', component: ManicuresPedicuresComponent },
  { path: 'natural-products-store', component: NaturalProductsStoreComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'peacock-cosmetics', component: PeacockCosmeticsComponent },
  { path: 'skin-care-services', component: SkinCareServicesComponent },
  { path: 'skin-care-products', component: SkinCareProductsComponent },
  { path: 'spray-tanning', component: SprayTanningComponent },
  { path: 'vitamins', component: VitaminsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DaySpaServicesComponent,
    SkinCareServicesComponent,
    HairServicesComponent,
    PackagesComponent,
    ManicuresPedicuresComponent,
    NaturalProductsStoreComponent,
    PeacockCosmeticsComponent,
    SprayTanningComponent,
    SkinCareProductsComponent,
    EssentialOilsComponent,
    VitaminsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
