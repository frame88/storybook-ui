import { NgClass } from '@angular/common';
import { booleanAttribute, Component, computed, input } from '@angular/core';

export type Variant = 'primary' | 'warning' | 'accent' | 'secondary' | 'disabled' | 'delete' | 'basil' | 'cheese' | 'peppe';
export type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'pizza-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <a 
      class="btn"
      [ngClass]="{
        'btn-primary': variant() === 'primary',
        'btn-secondary': variant() === 'secondary',
        'btn-disabled': variant() === 'disabled',
        'btn-delete': variant() === 'delete',
        'btn-basil': variant() === 'basil',
        'btn-cheese': variant() === 'cheese',
        'btn-peppe': variant() === 'peppe',
        'sm': size() === 'small',
        'md': size() === 'medium',
        'lg': size() === 'large',
      }">
      <ng-content>Lorem ipsum</ng-content>
    </a>
  `,
  styles: `
    @import '../../../assets/themes/colors.scss';

    .btn {
      font-family: "Bangers", system-ui;
      display: inline-block;
      padding: 0 1.5rem;
      height: 36px;
      border-radius: $br;
      border: none;
      font-size: $font-button;
      font-weight: 500;
      display: flex; align-items: center;
      width: fit-content;
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
      color: #222;
      &:focus {
        outline: 2px solid #0078d4;
        outline-offset: 2px;
      }
      &:hover {
        opacity: 0.9
      }
      &:active {
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        transform: scale(.95);
      }
    }


    .btn-primary {
      background: $primary;
      color: #fff;
    }

    .btn-secondary {
      background: $secondary;
      color: #fff;
    }

    .btn-secondary {
      background: $secondary;
      color: #222;
    }

    .btn-disabled {
      background: $disabled;
      color: #fff;
    }

    .btn-delete {
      background: $delete;
      color: #fff;
    }

    .btn-basil {
      background: $basil;
      color: #fff;
    }

    .btn-cheese {
      background-image: url('../../../assets/white.png');
      background-size: cover;
      color: #fff;
    }
    
    .btn-peppe {
      background-image: url('../../../assets/pepperoni.png');
      background-size: cover;
      color: #fff;
    }

    .sm {
      height: 36px;
      font-size: 10px;
    }

    .md {
      height: 46px;
      font-size: 16px;
    }

    .lg {
      height: 56px;
      font-size: 24px;
    }
  `
})
export class ButtonComponent {
  url = input<string>()
  variant = input<Variant>('primary')
  size = input<Size>('medium')
  
  targetValue = computed(() => {
    return this.url()?.includes('http')
      ? '_blank'
      : '_self'
  })
}

