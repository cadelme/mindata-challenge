import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  imports: [],
  templateUrl: './content-list.html',
  styles: ``,
})
export class ContentList {
  public articles = Array.from({ length: 6 }, (_, index) => ({
    date: 'Lorem ipsum dolor sit amet.',
    // Título para Tablet/Mobile (Item 1 tiene el texto corto)
    titleTablet:
      index === 0
        ? 'Lorem ipsum dolor sit amet.'
        : 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    // Título para Desktop (Item 2 tiene el texto corto)
    titleDesktop:
      index === 1
        ? 'Lorem ipsum dolor sit amet.'
        : 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
  }));
}
