import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ProjectHistoryComponent } from './project-history/project-history.component';
import { HomeComponent } from './home/home.component';
import { DiaryComponent } from './diary/diary.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { PoetryComponent } from './poetry/poetry.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DataCollectionAndPrivacyComponent } from './data-collection-and-privacy/data-collection-and-privacy.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "history", component: ProjectHistoryComponent},
  {path: "home", component: HomeComponent},
  {path: "diary", component: DiaryComponent},
  {path: "thoughts", component: ThoughtsComponent},
  {path: "poetry", component: PoetryComponent},
  {path: "music", component: MusicComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "data-collection-and-privacy", component: DataCollectionAndPrivacyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectHistoryComponent,
    HomeComponent,
    DiaryComponent,
    ThoughtsComponent,
    PoetryComponent,
    MusicComponent,
    ContactComponent,
    AboutComponent,
    DataCollectionAndPrivacyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
