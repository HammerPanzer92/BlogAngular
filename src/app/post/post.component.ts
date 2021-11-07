import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListPosts } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //Via @Input on peut récupéré une valeur passé une option dans le HTML (ici un tableau contenant les infos d'un post)
  @Input('unPost') post: any[] = [];
  @Input() index: number = 0;

  constructor( private listPosts: ListPosts,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Si possible, on récupére l'id présent dans l'adresse pour afficher un post    
    if(this.route.snapshot.params['id']){
      this.index = this.route.snapshot.params['id'];
      this.post = this.listPosts.tabPosts[this.index];
    }
   }

  like(): void{
    this.post[3] += 1;
  }

  dislike(): void{
    this.post[3] -= 1
  }
}