import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id:number; 
  @Input() title : string; 
  @Input() image: string; 
  @Input() description : string; 
  @Input() available : boolean; 

  @Output() notified = new EventEmitter<any>();

  @Output() Element = new EventEmitter<any>();

  getDescription(description: string) {
    alert(description);
  }

// sendNotif(){
// this.notified.emit("To the best dev !!!");
// }

sendNotif(){
  this.notified.emit({"msg":"success","code":"200"});
  }

  ShortListDetails(){
    this.Element.emit({"idUser":"1","idElement":"id","typeElement":"category"});
  }

}
