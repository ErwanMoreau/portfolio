import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { ServiceComponent } from './service/service.component';
import { LanguageState } from './shared/store/state/language.state';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CompetenceComponent } from './competence/competence.component';

const appRoutes: Routes = [

  {
    path: '',
    component: PrincipalComponent,
    data: { title: 'Heroes List' }
  }
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HeaderComponent,
    AboutComponent,
    PrincipalComponent,
    ServiceComponent,
    CompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      LanguageState
    ], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({storage: StorageOption.LocalStorage}),
    RouterModule.forRoot(
      appRoutes
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
