import { booleanAttribute, Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pizza-card',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="card" [class]="{'shadow': shadow() }">
      @if(pathImg()) {
        <img [src]="pathImg()" alt="immagine della card">
      }
      <div class="card-body">
        <h2>{{ title() }}</h2>
        <p>{{ description() }}</p>
        @if( actions()) {
          <div class="action-row">
            @if(secondAction()) {
              <pizza-button [variant]="'secondary'" [size]="'small'"></pizza-button>
            }
            <pizza-button [variant]="'primary'" [size]="'small'"></pizza-button>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      background-color: #fff;
      box-sizing: border-box;
      overflow: hidden;
      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
        transition-duration: .3s;
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .card-body {
      padding: 1.5rem;
      //padding-top: 0;

      /* Titolo */
       h1, 
       h2 {
        margin: 0!important;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.4;
      }
  
      /* Testo descrittivo */
      p {
        margin: 0;
        font-size: 1rem;
        color: #444;
        line-height: 1.5;
      }

      .action-row {
        display: flex;
        justify-content: end; gap: 0.5rem;
        margin-top: 1rem;
      }
    }

    .shadow {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

  `
})
export class CardComponent {
  //url = input<string>()
  pathImg = input<string>();
  title = input<string>('Card Title');
  description = input<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  shadow = input(true, { transform: booleanAttribute });
  actions = input(true, { transform: booleanAttribute });
  secondAction = input(false, { transform: booleanAttribute });
}
