import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { reducers } from './store/reducers';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleComponent } from './components/article/article.component';
import { TagListNodule } from '../shared/modules/tagList/tagList.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListNodule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService],
})
export class ArticleModule {}
