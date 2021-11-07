import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePostsComponent } from './liste-posts/liste-posts.component';
import { ListPosts } from './services/posts.service';
import { PostComponent } from './post/post.component';
import { AproposComponent } from './apropos/apropos.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PerduComponent } from './perdu/perdu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ObsComponent } from './obs/obs.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ListePostsComponent,
    PostComponent,
    AproposComponent,
    AddpostComponent,
    PerduComponent,
    AccueilComponent,
    ObsComponent,
    AuthComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ListPosts],
  bootstrap: [AppComponent]
})
export class AppModule { }
