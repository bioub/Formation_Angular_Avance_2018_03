import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiCopyrightModule } from '@formationtech/ui-copyright';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ContactsModule,
    UiCopyrightModule,
    AppRoutingModule, // toujours en dernier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
