import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import { ObsComponent } from './obs/obs.component';
import { PerduComponent } from './perdu/perdu.component';
import { PostComponent } from './post/post.component';

//ATTENTION : priorité (si path:'' aprés path:'**' alors il sera prioritaire)
const routes: Routes = [{path:'liste', component:ListePostsComponent},
{path:'post/:id', component:PostComponent}, 
{path:'about', component:AproposComponent},
{path:'add', component:AddpostComponent},
{path:'perdu', component:PerduComponent},
{path:'', component:AccueilComponent},
{path:'**', redirectTo: 'perdu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
