import { Component } from '@angular/core';

@Component({
  selector: 'ap-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
