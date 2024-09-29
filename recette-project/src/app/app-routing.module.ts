import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { RecetteDetailComponent } from './pages/recette-detail/recette-detail.component';
import { AjouterRecetteComponent } from './pages/ajouter-recette/ajouter-recette.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  
  { path: '', 
    component: HomeComponent },

  { path: 'recettes/edit/:id', 
    component: AjouterRecetteComponent }, 

  { path: 'recettes', 
    component: RecettesComponent,
    canActivate: [AuthGuard]
  },

  { path: 'recettes/:id', 
    component: RecetteDetailComponent 
  }, 
  { path: 'ajouter-recette', 
    component: AjouterRecetteComponent,
    canActivate: [AuthGuard] 
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: 'register', 
    component: RegisterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }