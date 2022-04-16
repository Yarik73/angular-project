import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorsMessages/backendErrorsMessages.module';
import { AuthSevice } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthSevice],
})
export class AuthModule {}
