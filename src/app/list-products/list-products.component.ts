import { Component, OnInit } from '@angular/core';
import { Product2 } from '../models/product2';
import { CategoryService } from '../Services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product2[] = [];
  selectedCategoryId: string = '';
  selectedProduct: Product2 | null = null; // To hold the product being edited

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategoryId = params['id'];
      this.loadProductsByCategory(this.selectedCategoryId);
    });
  }
  
  loadProductsByCategory(categoryId: string): void {
    this.categoryService.getListProductsByCategory(categoryId).subscribe(products => {
      this.listProducts = products;
      console.log('Products loaded:', this.listProducts);
    });
  }

  onDeleteProduct(productId: number): void {
    this.categoryService.supprimerProduct(productId).subscribe(() => {
      this.loadProductsByCategory(this.selectedCategoryId); // actualiser ... sort of ...
    });
  }

  // Method to select a product to edit ... 
  onEditProduct(product: Product2): void {
    this.selectedProduct = { ...product }; // ... Create a copy of the product to edit
  }

  // Method to save updated product ... 
  onUpdateProduct(): void {
    if (this.selectedProduct) {
      this.categoryService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(updatedProduct => {
        // Update the list with nouveau produit
        const index = this.listProducts.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          this.listProducts[index] = updatedProduct;
        }
        this.selectedProduct = null; // clear .. les champs du Form
      });
    }
  }
}
