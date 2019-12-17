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
import { ProjectComponent } from './project/project.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';


const appRoutes: Routes = [

  {
    path: '',
    component: PrincipalComponent,
    data: { title: 'principal accueil' }
  },
  {
    path: 'projet',
    component: ViewComponent,
    data: { title: 'vue projet' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HeaderComponent,
    AboutComponent,
    PrincipalComponent,
    ServiceComponent,
    CompetenceComponent,
    ProjectComponent,
    CvComponent,
    ContactComponent,
    FooterComponent,
    ViewComponent
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
