import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UiSidenavComponent } from './ui-components/ui-sidenav/ui-sidenav.component';
import { UiFooterComponent } from './ui-components/ui-footer/ui-footer.component';
import { UiDashboardViewComponent } from './ui-components/ui-dashboard-view/ui-dashboard-view.component';
import { UiHeaderComponent } from './ui-components/ui-header/ui-header.component';

const routes: Routes = [
  { path: 'dashboard', component: UiDashboardViewComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UiSidenavComponent,
    UiFooterComponent,
    UiDashboardViewComponent,
    UiHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
