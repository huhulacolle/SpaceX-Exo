import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeLaunchesComponent } from './components/see-launches/see-launches.component';
import { SeCapsulesComponent } from './components/se-capsules/se-capsules.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailCapsComponent } from './components/detail-caps/detail-caps.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeLaunchesComponent,
    SeCapsulesComponent,
    NavbarComponent,
    DetailCapsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
