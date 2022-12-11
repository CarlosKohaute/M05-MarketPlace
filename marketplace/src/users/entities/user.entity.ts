import { Favorite } from 'src/favorites/entities/favorite.entitie';
export class User {
  id?: string;
  ISAdmin?: string;
  name: string;
  email: string;
  password?: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
  favorites?: Favorite[];
}
