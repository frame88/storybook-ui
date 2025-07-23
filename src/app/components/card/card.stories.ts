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
    },
    argTypes: {
    }
}