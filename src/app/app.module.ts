import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { JoinPage } from '../pages/join/join';
import { AlumniPage } from '../pages/alumni/alumni';
import { ExpositionPage } from '../pages/exposition/exposition';
import { HooverPage } from '../pages/hoover/hoover';
import { RichardsonPage } from '../pages/richardson/richardson';
import { RosePage } from '../pages/rose/rose';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from '@ionic-native/google-maps';
import { DataManagerProvider } from '../providers/data-manager/data-manager';

import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    JoinPage,
    AlumniPage,
    ExpositionPage,
    RichardsonPage,
    HooverPage,
    RosePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    JoinPage,
    AlumniPage,
    ExpositionPage,
    RichardsonPage,
    HooverPage,
    RosePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataManagerProvider
  ]
})
export class AppModule { }
