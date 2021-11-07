import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loading = false;

  constructor(private readonly supabase: SupabaseService, private router: Router) { }

  ngOnInit(){

  }

  /**
   * Gére la connexion d'un utilisateur
   * @param email Le mail de l'utilisateur
   * @param mdp Le mdp de l'utilisateur
   */
  async handleLogin(email: string, mdp: string) {
    try {
      this.loading = true;
      //On lance la connexion
      await this.supabase.signIn(email, mdp);
      //On envoi une alerte pour signaler qu'un mail a été envoyé
      alert('Enregistré');
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      this.loading = false;
      this.router.navigate(["/"]);
    }
  }

}
