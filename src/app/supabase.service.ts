import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from "../environments/environment";

//indique la manière dont est stocké les infos de la table "profile"
export interface Profile {
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  /**
   * Créé un nouveau client supabase (via les infos stocké dans environment.ts)
   */
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  /**
   * Récupére l'utilisateur via le service d'auth de supabase
   * @returns L'utilisateur actuellement connecté
   */
  get user() {
    return this.supabase.auth.user();
  }

  /**
   * Récupére la session via le service d'auth de supabase
   */
  get session() {
    return this.supabase.auth.session();
  }

  /**
   * Récupére le profile de l'utilisateur
   * @returns Le profile de l'utilisateur connecté
   */
  get profile() {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', this.user?.id)
      .single();
  }

  /**
   * Gére les changements de situations du auth
   * @param callback Fonction a appelé lors d'un changement au niveau du auth
   * @returns un Observable/subscription
   */
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  /**
   * Permet de connecter un utilisateur
   * @param email Le mail de l'utilisateur
   * @param password Le mot de passe
   * @returns 
   */
  signIn(email: string, password: string) {
    //Possibilté de rajouté le mdp, même un numéro de tel (nécessite config de supabase)
    return this.supabase.auth.signIn({email: email, password: password });
  }

  signUp(email: string, password: string){
    return this.supabase.auth.signUp({email: email, password: password});
  }

  /**
   * Déconnecte l'utilisateur actuelle
   * @returns null, ou une erreur si il en a une
   */
  signOut() {
    return this.supabase.auth.signOut();
  }

  /**
   * Mets a jour le profil de l'utilisateur actuelle
   * @param profile Le profil modifié
   * @returns les infos, ou une erreur si il en a une
   */
  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date()
    }

    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal', // Don't return the value after inserting
    });
  }

  /**
   * Télécharge l'image d'un utilisateur
   * @param path Télécharge l'avatar d'un utilisateur (chemin stocké dans la BDD)
   * @returns l'image, ou une erreur si il en a une
   */
  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  /**
   * Stocke l'avatar d'un utilisateur
   * @param filePath Le chemin du fichier
   * @param file Le fichier
   * @returns 
   */
  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage
      .from('avatars')
      .upload(filePath, file);
  }
}
