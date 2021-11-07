import { Component, OnInit } from '@angular/core';
import { ListPosts } from '../services/posts.service';

@Component({
  selector: 'app-liste-posts',
  templateUrl: './liste-posts.component.html',
  styleUrls: ['./liste-posts.component.css']
})
export class ListePostsComponent implements OnInit {

  tabPost: any[] = [];

  //On récupére le service ListPosts
  constructor(private listPost: ListPosts) { }

  ngOnInit(): void { 
    //On stocke dans la classe le tableau des posts (pour plus de simplificité dans le HTML)   
    this.tabPost=this.listPost.tabPosts;
  }

}
