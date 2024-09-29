import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { RecetteDetailComponent } from './pages/recette-detail/recette-detail.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { AjouterRecetteComponent } from './pages/ajouter-recette/ajouter-recette.component'; 
import { LoginComponent } from './auth/login/login.component'; 
import { RegisterComponent } from './auth/register/register.component'; 
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AjouterRecetteComponent,
    TruncatePipe,
    RecettesComponent,
    RecetteDetailComponent,
    HomeComponent,
    HighlightDirective,
    LoginComponent,  
    RegisterComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }