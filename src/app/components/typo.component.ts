import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'itk-typo',
  standalone: true,
  imports: [NgClass],
  template: `
    <h1 [ngClass]="{
      'title': size() === 'title',
      'subtitle': size() === 'subtitle',
      'heading1': size() === 'heading1',
      'heading2': size() === 'heading2',
      'heading3': size() === 'heading3',
      'heading4': size() === 'heading4',
      'heading5': size() === 'heading5',
      'heading6': size() === 'heading6',
      'body': size() === 'body',
      'smallbody': size() === 'smallbody',
      'label': size() === 'label',
      'button': size() === 'button',
      'caption': size() === 'caption',
      'underlined': underlined(),
      'italic': italic(),
      'bold': bold()
    }">
      <ng-content>Lorem Ipsum</ng-content>
    </h1>
  `,
  styles: `
    * {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      margin: 0;
    }

    .title { font-size: 48px; }
    .subtitle { font-size: 24px; }
    .heading1 { font-size: 40px; }
    .heading2 { font-size: 32px; }
    .heading3 { font-size: 24px; }
    .heading4 { font-size: 20px; }
    .heading5 { font-size: 16px; }
    .heading6 { font-size: 16px; }
    .body { font-size: 16px; }
    .smallbody { font-size: 14px; }
    .label { font-size: 14px; }
    .button { font-size: 14px; }
    .caption { font-size: 12px; }

    .underlined { text-decoration: underline!important; }
    .italic { font-style: italic; }
    .bold { font-weight: 600; }
  `
})

export class TypoComponent {
  /**
   * Tipo di testo
  */
  size = input<'title' | 'subtitle' | 'heading1'| 'heading2'| 'heading3'| 
  'heading4'| 'heading5'| 'heading6' | 'body' | 'smallbody' | 'label' | 'button' | 'caption'>('smallbody')
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
