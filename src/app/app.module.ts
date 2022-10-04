import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeLaunchesComponent } from './components/see-launches/see-launches.component';
import { SeCapsulesComponent } from './components/se-capsules/se-capsules.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeLaunchesComponent,
    SeCapsulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
