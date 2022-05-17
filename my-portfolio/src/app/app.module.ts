import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIntroComponent } from './app-intro/containers/app-intro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppIntroViewComponent } from './app-intro/views/app-intro-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIntroComponent,
    AppIntroViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
