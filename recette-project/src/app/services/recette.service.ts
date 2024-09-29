import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiUrl = 'http://localhost:3000/recettes'; 

  constructor(private http: HttpClient) { }

  getRecettes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRecetteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour ajouter une recette
  ajouterRecette(recette: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, recette);
  }

  updateRecette(recette: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${recette.id}`, recette);
  }
  
  deleteRecette(id: number) {
    return this.http.delete(`http://localhost:3000/recettes/${id}`);
  }
}