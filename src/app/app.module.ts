import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { menuReducer } from './store/store.reducer'
import { userReducer } from './store/user-store/user-reducer';
import { EffectsModule } from '@ngrx/effects'
import { numberEffects } from 'src/app/store/random-number-store/random-number-effects'
import { numberReducer } from './store/random-number-store/random-number-reducers';
import { randomUserReducer } from 'src/app/store/random-user-store/random-users.reducers'
import {randomUserEffects} from 'src/app/store/random-user-store/random-users.effects';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forRoot({menuStatus: menuReducer, userCredentials: userReducer, numbers:numberReducer,randomUser:randomUserReducer}),
    EffectsModule.forRoot([numberEffects,randomUserEffects]),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
