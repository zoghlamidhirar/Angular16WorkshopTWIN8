
import { Product } from './../models/product';
import { Categorie } from '../models/categorie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product2 } from '../models/product2';

@Injectable({
  providedIn: 'root'
  //une seule insatance pour tous les composants
  //et les services de l'application
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  // getListCategories() :  Categorie[]{
  //   return [
  //     {"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"description 1", "available":true},
  //     {"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description 2", "available":true},
  //     {"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description 3", "available":true},
  //     {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"description 4", "available":true},
  //     {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"description 5", "available":false},
  //     {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"description 6","available":false},
  //     ]
  // }

  getListCategoriesFromBackend(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.url}/categories`);
  }

  getListProductsFromBackend(): Observable<Product2[]> {
    return this.http.get<Product2[]>(`${this.url}/products`);
  }

  getListProductsByCategory(id: string): Observable<Product2[]> {
    return this.http.get<Product2[]>(`${this.url}/products?categoryId=${id}`);
  }

  addProduct(p: Product2): Observable<Product2> {
    return this.http.post<Product2>(`${this.url}/products`, p);
  }

  supprimerCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/products/${id}`);
  }

  
  updateCategory(category: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.url}/categories/${category.id}`, category);
  }

  updateProduct(productId: number, updatedProduct: Product2): Observable<Product2> {
    return this.http.put<Product2>(`${this.url}/products/${productId}`, updatedProduct);
  }

  supprimerProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/products/${id}`);
  }





}
