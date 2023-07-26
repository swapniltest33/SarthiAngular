import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RequestHistoryComponent } from './history/request-history/request-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    ConfigurationComponent,
    GuestComponent,
    ProfileComponent,
    RequestHistoryComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,

    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide:NavigationItem
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
   
  bootstrap: [AppComponent]
})
export class AppModule {}
