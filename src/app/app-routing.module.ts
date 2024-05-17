import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';

// Auth
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './shared/service/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: AppComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'page', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
