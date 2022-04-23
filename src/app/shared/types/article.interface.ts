import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoditesCount: number;
  slug: string;
  tagList: string;
  title: string;
  updateAt: string;
}
