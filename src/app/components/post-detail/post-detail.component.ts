import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post$!: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post$ = this.postsService.getPostById(id);
  }

  toggleFavorite(post: Post): void {
    if (this.favoritesService.isFavorite(post.id)) {
      this.favoritesService.removeFromFavorites(post.id);
    } else {
      this.favoritesService.addToFavorites(post);
    }
  }
}
