import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'pizza-typo',
  standalone: true,
  imports: [NgClass],
  template: `
    <h1 [ngClass]="{
      'title': size() === 'hero',
      'heading1': size() === 'heading1',
      'heading2': size() === 'heading2',
      'heading3': size() === 'heading3',
      'body': size() === 'body',
      'label': size() === 'label',
      'button': size() === 'button',
      'underlined': underlined(),
      'italic': italic(),
      'bold': bold()
    }">
      <ng-content>Lorem Ipsum dolor sit amet</ng-content>
    </h1>
  `,
  styles: `
    .hero { font-size: 64px; }
    .heading1 { font-size: 32px; }
    .heading2 { font-size: 24px;  }
    .heading3 { font-size: 18px;  }
    .body { font-size: 12px; }
    .label { font-size: 10px; }
    .button { font-size: 12px; }

    .underlined { text-decoration: underline!important; }
    .italic { font-style: italic; }
    .bold { font-weight: 600; }

    * {
      font-family: "Bangers", system-ui;
    }
  `
})

export class TypoComponent {
  /**
   * Tipo di testo
  */
  size = input<'hero' | 'heading1'| 'heading2'| 'heading3'| 
   'body' | 'label' | 'button'>('body')
  /**
   * Testo con sottotitolo
   */
  underlined = input(false, { transform: booleanAttribute })
  /**
   * Testo in corsivo
   */
  italic = input(false, { transform: booleanAttribute })
  /** 
   * testo in grassetto
   */
  bold = input(false, { transform: booleanAttribute })
}
