import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizarPipe } from './capitalizar.pipe';
import { ActiveModuleDirective } from './active-module.directive';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListModulesComponent } from './list-modules/list-modules.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    ActiveModuleDirective,
    UsersComponent,
    UserDetailsComponent,
    ListModulesComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
