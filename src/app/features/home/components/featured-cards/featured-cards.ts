import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-cards',
  imports: [CommonModule],
  templateUrl: './featured-cards.html',
  styles: ``,
})
export class FeaturedCards {
  public articles = Array.from({ length: 4 }, () => ({
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    link: '#',
    date: 'Oct 24, 2025',
  }));
}
