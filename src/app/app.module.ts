import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './Services/user-service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './Services/auth-guard.service';
import { AppDataService } from './Services/app-data-service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
