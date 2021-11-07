import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  session = this.supabase.session;

  constructor(private readonly supabase: SupabaseService) { }

  ngOnInit(): void {
    console.log(this.session);
  }

  //Gére les events du component obs
  onOpen(value:string){
    console.log(value);
  }

  onClose(value:string){
    console.log(value);
  }
}
