import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {
  visible: boolean = false;
  //On créé des events emitter pour gérer des events custom
  @Output() open: EventEmitter<string> = new EventEmitter();
  @Output() close: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      //On emét via l'event une valeur qui sera reçu par le component d'au-dessus
      this.open.emit("ouvert");
    } else {
      this.close.emit("ferme");
    }
  }
}
