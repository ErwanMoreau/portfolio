import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageState } from './shared/store/state/language.state';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      LanguageState
    ], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({storage: StorageOption.LocalStorage})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
