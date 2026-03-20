import { Component } from '@angular/core';
import { HomeBanner } from './components/home-banner/home-banner';
import { ContentList } from './components/content-list/content-list';
import { FeaturedCards } from './components/featured-cards/featured-cards';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, ContentList, FeaturedCards],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
