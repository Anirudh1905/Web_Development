import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrangeComponent } from './orange/orange.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    OrangeComponent,
    BlueComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
