import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactService } from './services/contact/contact.service';
import { FakeContactService } from './services/contact/fake-contact.service';
import { UniversalTranslateLoader } from '@ngx-universal/translate-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(platformId: any, httpClient: HttpClient) {
  const browserLoader = new TranslateHttpLoader(httpClient);
  return new UniversalTranslateLoader(platformId, browserLoader, 'dist/server/assets/i18n');
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [PLATFORM_ID, HttpClient]
      }
    }),
  ],
  declarations: [
    NotFoundComponent,
    HomeComponent,
    MenuComponent,
  ],
  providers: [
    // A faire dans les tests
    { provide: ContactService, useClass: FakeContactService },
    // ContactService,
    // { provide: ContactService, useClass: ContactService },
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
    MenuComponent,
  ]
})
export class CoreModule { }
