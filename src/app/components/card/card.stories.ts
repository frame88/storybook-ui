import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
/**
   Contenitore flessibile per raggruppare contenuti correlati in modo visivo. Utilizzato per anteprime, riassunti o azioni rapide, può includere titolo, descrizione, media e pulsanti.
 */

const meta: Meta<CardComponent> = {
    title: 'components/Card',
    component: CardComponent,
    tags: ['autodocs']
}

export default meta;

export const Basic: StoryObj<CardComponent> = {
  args: {
    title: 'Pizza Margherita',
    description: 'La regina delle pizze, con pomodoro, mozzarella e basilico.',
    pathImg: 'https://storybook-ui-kohl.vercel.app/pepperoni.06703e551f96b1f1.png',
    actions: true,
    secondAction: false,
    shadow: false
  },
  parameters: {
    docs: {
      description: {
        story: `ℹ️ L'attributo \`shadow\` è un booleano Può essere scritto anche in forma breve nel template: \`<pizza-card shadow></pizza-card>\` invece di \`[shadow]="true"\`.
        `
      }
    }
  },

  argTypes: {
    pathImg: {
      control: 'text',
      description: 'Path dell’immagine da visualizzare nella card',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    title: {
      control: 'text',
      description: 'Titolo della card',
      table: {
        defaultValue: { summary: 'Card Title' },
      },
    },
    description: {
      control: 'text',
      description: 'Descrizione della card',
      table: {
        defaultValue: { summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      },
    },
    actions: {
      control: 'boolean',
      description: 'Mostra o nasconde la sezione azioni della card',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    secondAction: {
      control: 'boolean',
      description: 'Mostra o nasconde la cta secondaria',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shadow: {
      control: 'boolean',
      description: '',
      table: {
          defaultValue: { summary: 'false' }
      }
    }

  }
}