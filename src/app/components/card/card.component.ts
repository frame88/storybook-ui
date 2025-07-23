import { Component, input } from '@angular/core';

@Component({
  selector: 'pizza-card',
  standalone: true,
  imports: [],
  template: `
    <div>
      @if(pathImg()) {
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rPTHZR-Z79Cx2lK4isBzBCU_s-Apqysa4w&s" alt="immagine della card">
      }
      <div class="card-body">
        <h2>{{ title() }}</h2>
        <p>{{ description() }}</p>
        <button class="btn">Action</button>
        <button class="btn">Action</button>
      </div>
    </div>
  `,
  styles: `

  `
})
export class CardComponent {
    url = input<string>()
    pathImg = input<string>('../../../assets/white.png');
    title = input<string>('Card Title s')
    description = input<string>('Card description goes here. It provides a brief overview of the content');

}
