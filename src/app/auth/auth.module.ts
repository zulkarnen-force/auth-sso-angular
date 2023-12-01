import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
