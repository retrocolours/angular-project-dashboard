import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Post[] = [];

  getFavorites(): Post[] {
    return this.favorites;
  }

  addToFavorites(post: Post): void {
    if (!this.isFavorite(post.id)) {
      this.favorites.push(post);
    }
  }

  removeFromFavorites(postId: number): void {
    this.favorites = this.favorites.filter((post) => post.id !== postId);
  }

  isFavorite(postId: number): boolean {
    return this.favorites.some((post) => post.id === postId);
  }
}
