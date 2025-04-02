import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { FavoritesService } from '../../services/favorites.service';
import { Post } from '../../models/post';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<{ posts: Post[] }>;

  constructor(
    public postsService: PostsService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  toggleFavorite(post: Post): void {
    if (this.favoritesService.isFavorite(post.id)) {
      this.favoritesService.removeFromFavorites(post.id);
    } else {
      this.favoritesService.addToFavorites(post);
    }
  }
}
