import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ap-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName!: string | null;
  apiUrl!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;  
    })
  }
}
