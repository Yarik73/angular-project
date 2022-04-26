import { Component, Input } from '@angular/core';

import { PopularTagType } from 'src/app/shared/types/popularTag.type';


@Component({
  selector: 'ap-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss'],
})
export class TagListComponent {
  @Input('tags') tagsProps!: PopularTagType[];
}