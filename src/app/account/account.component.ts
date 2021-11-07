import { Component, Input, OnInit } from '@angular/core';
import { Session } from "@supabase/supabase-js";
import { Profile, SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loading = false;
  profile: Profile | undefined;

  //On récupére la session
  @Input() session: Session | undefined;

  //On récupére le service Supabase
  constructor(private readonly supabase: SupabaseService) { }

  //On récupére le profile a l'initialisation
  ngOnInit() {
    this.getProfile();
  }

  /**
   * Récupére le profil de l'utilisateur actuel
   */
  async getProfile() {
    try {
      this.loading = true;
      //Récupére le profile dans un objet
      let {data: profile, error, status} = await this.supabase.profile;

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        this.profile = profile;
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      this.loading = false;
    }
  }

  /**
   * Mets a jour le profil
   * @param username Nom d'utilisateur
   * @param website L'url du site de l'utilisateur
   * @param avatar_url L'url de l'avatar de l'utilisateur
   */
  async updateProfile(username: string, website: string, avatar_url: string = '') {
    try {
      this.loading = true;
      await this.supabase.updateProfile({username, website, avatar_url});
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  /**
   * Déconnecte l'utilisateur
   */
  async signOut() {
    await this.supabase.signOut();
  }
}
