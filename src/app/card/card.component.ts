import { Component, EventEmitter, Input, Output } from '@angular/core';
import { shortList } from '../models/shortList';
import { Product2 } from '../models/product2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number; 
  @Input() title: string; 
  @Input() image: string; 
  @Input() description: string; 
  @Input() available: boolean; 
  @Input() InProduct: boolean;

  @Output() notified = new EventEmitter<any>();
  @Output() Element = new EventEmitter<shortList>();
  @Output() onDeleteProduct = new EventEmitter<number>(); 

  @Output() onEditProduct = new EventEmitter<Product2>();






  btnText: string = 'Add to shortlist'; 

  getDescription(description: string) {
    alert(description);
  }

  sendNotif(){
    this.notified.emit({"msg":"success","code":"200"});
  }

  ShortListDetails() {
    let x: shortList = {
      id: 1,
      idUser: 1, 
      idElement: this.id, 
      typeElement: "category"
    }
    this.Element.emit(x);
  }

  deleteProduct() {
    this.onDeleteProduct.emit(this.id); 
  }

  editProduct() {
    this.onEditProduct.emit({
      id: this.id,
      name: this.title,
      image: this.image,
      description: this.description,
      promotion: false, 
      quantity: 0,
      categoryId: 0
    });
  }
}
