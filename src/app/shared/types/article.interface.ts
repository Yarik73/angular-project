import { PopularTagType } from "./popularTag.type";
import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoditesCount: number;
  slug: string;
  tagList: PopularTagType[];
  title: string;
  updateAt: string;
}
