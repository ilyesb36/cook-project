import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss'],
  encapsulation: ViewEncapsulation.None 

})
export class RecettesComponent implements OnInit {
  recettes: any[] = [];
  filteredRecettes: any[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';

  constructor(
    private recetteService: RecetteService,
    private route: ActivatedRoute, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe((data) => {
      this.recettes = data;

      // Get the category from query params and filter recipes
      this.route.queryParams.subscribe((params) => {
        this.selectedCategory = params['category'] || '';
        this.filterRecipesByCategory();
      });
    });
  }

    // Method to filter recipes based on the category
    filterRecipesByCategory(): void {
      if (this.selectedCategory) {
        this.filteredRecettes = this.recettes.filter(
          recette => recette.category === this.selectedCategory
        );
      } else {
        this.filteredRecettes = this.recettes; 
      }
    }

  // Method to filter recipes
  searchRecipes(): void {
    this.filteredRecettes = this.recettes.filter((recette) =>
      recette.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to reset search
  resetSearch(): void {
    this.searchQuery = '';
    this.filteredRecettes = this.recettes;
  }

  // Method to navigate to the edit page for a specific recipe
  editRecette(recette: any): void {
    this.router.navigate(['/recettes/edit', recette.id]); 
  }

  // Method to delete a recipe
  deleteRecette(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette recette ?')) {
      this.recetteService.deleteRecette(id).subscribe(() => {
        this.recettes = this.recettes.filter((recette) => recette.id !== id);
        this.filteredRecettes = this.filteredRecettes.filter((recette) => recette.id !== id);
        console.log('Recette supprimée avec succès');
      });
    }
  }
}