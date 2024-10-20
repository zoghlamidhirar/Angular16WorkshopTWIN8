import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = [
    { id: 1, title: "Grand électroménager", image: "assets/images/categorie_electromenager.jpg", description: "desc Grand électroménager", available: true },
    { id: 2, title: "Petit électroménager", image: "assets/images/categorie_petit_electromenager.jpg", description: "desc Petit électroménager", available: true },
    { id: 3, title: "Produits informatiques", image: "assets/images/categorie_produits_informatiques.jpg", description: "desc Produits informatiques", available: true },
    { id: 4, title: "Smart Phones", image: "assets/images/categorie_smartPhone.jpg", description: "desc Smart Phones", available: true },
    { id: 5, title: "TV, images et son", image: "assets/images/categorie_tv_image_son.jpg", description: "desc TV, images et son", available: true },
    { id: 6, title: "Produits voiture", image: "assets/images/produits_nettoyages.jpg", description: "desc Produits voiture", available: false }
  ];

  myDate: Date = new Date();
  titre: string = "";

  getDescription(description: string) {
    alert(description);
  }

  filteredCategories() {
    if (!this.titre) {
      return this.categories;
    }
    return this.categories.filter(category =>
      category.title.toLowerCase().includes(this.titre.toLowerCase())
    );
  }
}
