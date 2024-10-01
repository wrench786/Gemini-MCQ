import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './page/topic-page/topic-page.component';
import { QuizPageComponent } from './page/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path:'topic-page',
    component: TopicPageComponent
  },
  {
    path:'mcq-test',
    component:QuizPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
