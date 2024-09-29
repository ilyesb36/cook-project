import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { RecetteService } from '../../services/recette.service'; // Importer le service
import { AuthService } from '../../services/auth.service'; // Import AuthService
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-ajouter-recette',
  templateUrl: './ajouter-recette.component.html',
  styleUrls: ['./ajouter-recette.component.scss']
})
export class AjouterRecetteComponent implements OnInit {
  recetteForm!: FormGroup;
  successMessage: string = ''; // Propriété pour le message de succès
  currentUser: string = '';

  constructor(
    private fb: FormBuilder,
    private recettesService: RecetteService, // Injecter le service
    private router: Router, // Injecter Router
    private authService: AuthService // Inject AuthService to get current user
  ) {}

  ngOnInit(): void {
    this.recetteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, this.minLengthValidator(10)]],
      imageUrl: ['', Validators.required], // Champ pour l'image
      category: ['', Validators.required], // Champ pour la catégorie
      ingredients: ['', Validators.required],
      username: ['', Validators.required] // Hidden field for the creator's username
    });
    // Get the currently logged-in user's username
    this.currentUser = this.authService.getUsername();
    this.recetteForm.patchValue({ username: this.currentUser });
  }

  minLengthValidator(minLength: number): ValidatorFn {
    return (control) => {
      const isValid = control.value?.length >= minLength;
      return isValid ? null : { 'minLength': true };
    };
  }

  onSubmit(): void {
    if (this.recetteForm.valid) {
      this.recettesService.ajouterRecette(this.recetteForm.value).subscribe(() => {
        console.log('Recette ajoutée avec succès', this.recetteForm.value);
        // Mettre à jour le message de succès
        this.successMessage = 'Recette ajoutée avec succès';
        // Réinitialiser le formulaire
        this.recetteForm.reset();
        // Redirection vers la liste des recettes
        this.router.navigate(['/recettes']);
      });
    }
  }
}