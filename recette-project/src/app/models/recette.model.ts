export interface Recette {
  id: number;
  titre: string;    
  description: string;
  imageUrl: string;      
  categorie: string;      
  ingredients: string;
  utilisateur?: string; 
}