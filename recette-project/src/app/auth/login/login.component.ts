import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = ''; // Pour afficher le message

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Ajouté pour récupérer les paramètres
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

    // Récupérer le message des queryParams
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((user: User[]) => {
      if (user.length === 0) alert('Erreur dans le pseudo ou le mot de passe');
      this.authService.user = user[0];
      if (!this.authService.user) return;
      this.authService.saveUser();
      this.router.navigate(['/recettes']);
    }, (error) => {
      alert('Erreur dans la requête');
    });
  }
}