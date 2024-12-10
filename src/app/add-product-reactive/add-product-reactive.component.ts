import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../Services/category.service';
import { Product2 } from '../models/product2';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {

  myForm: FormGroup;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]),
      image: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      promotion: new FormControl(false, [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  get image() {
    return this.myForm.get('image');
  }

  get categoryId() {
    return this.myForm.get('categoryId');
  }

  get description() {
    return this.myForm.get('description');
  }

  get promotion() {
    return this.myForm.get('promotion');
  }

  get quantity() {
    return this.myForm.get('quantity');
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.categoryService.getListProductsFromBackend().subscribe(
        (products: Product2[]) => {
          const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
          const newProduct: Product2 = {
            id: maxId + 1,
            name: this.myForm.value.name,
            image: this.myForm.value.image,
            description: this.myForm.value.description,
            promotion: this.myForm.value.promotion,
            quantity: this.myForm.value.quantity,
            categoryId: this.myForm.value.categoryId
          };

          this.categoryService.addProduct(newProduct).subscribe(
            response => {
              console.log('Product saved successfully', response);
              // Clear form after submission
              this.myForm.reset();
            },
            error => {
              console.error('Error saving product', error);
            }
          );
        },
        error => {
          console.error('Error fetching products', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
