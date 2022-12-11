export class User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
  favorites?: Favorite[];
}
