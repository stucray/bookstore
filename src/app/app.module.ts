import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksModule } from '../books/books.module';
import { MainHeaderComponent } from './containers/main-header/main-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './store';
import { CustomSerializer } from './store/reducers/custom-route-serializer';
import { AngularOauthModule } from '@stucray/angular-oauth';

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    AngularOauthModule.forRoot({
      clientId: 'bookstore',
      issuerUrl: 'http://euler:8080/auth/realms',
      resourceServers: ['http://euclid'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
