import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LLearnComponent } from './layout/l-learn/l-learn.component';
import { LPlatziSquareComponent } from './layout/l-platzi-square/l-platzi-square.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LLearnComponent,
    LPlatziSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
