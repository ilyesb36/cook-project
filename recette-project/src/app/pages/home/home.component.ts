import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  // Method to view recipes by category
  viewCategory(category: string): void {
    this.router.navigate(['/recettes'], { queryParams: { category } });
  }
}