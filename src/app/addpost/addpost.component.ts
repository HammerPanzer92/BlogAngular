import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListPosts } from '../services/posts.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  //On créé un form via FormGroup (permet de regrouper plusieurs FormControl)
  //Note on peut utiliser le service formBuilder pour simplifier
  /* postForm = new FormGroup({
    //Dans chaque FormControl, on précise qu'on souhaite qu'il soit obligatoire
    titre: new FormControl('', Validators.required),
    contenu: new FormControl('', Validators.required),
    testGroup: new FormGroup({
      unChamp: new FormControl('', Validators.required),
      autreChamp: new FormControl('')
    })
  }) */

  enregistre:boolean = false;

  constructor(private listPosts: ListPosts) { }

  ngOnInit(): void {
  }

  /**
   * Ajoute un post dans le service
   */
  /* ajout(): void {
    //On génére le nouveau post avec les infos du form
    var newPost = [this.postForm.value.titre, new Date(), this.postForm.value.contenu, 0];

    //On le rajoute dans le tableau des posts (du service)
    this.service.tabPosts.push(newPost);

    //On remets le form a 0
    this.postForm.reset();

    console.log("Post ajouté");
  } */

  /**
   * Fonction pour form via ngModel
   * @param f le ngForm
   */
  onSubmit(f: NgForm): void{
    let newPost = [f.value.titre, new Date(), f.value.contenu, 0];
    this.listPosts.tabPosts.unshift(newPost);
    f.reset();
    this.enregistre = true;
  }

  closeAlert(): void{
    this.enregistre = false;
  }
}