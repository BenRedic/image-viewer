import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, TopBarComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
