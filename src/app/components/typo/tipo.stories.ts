import { Meta, StoryObj } from '@storybook/angular';
import { TypoComponent } from './typo.component';
/**
    Una buona tipografia facilita la lettura, guida l’attenzione dell’utente e rafforza l’identità visiva, contribuendo in modo essenziale all’esperienza complessiva.
 */

const meta: Meta<TypoComponent> = {
    title: 'fundamental/Typography',
    component: TypoComponent,
    tags: ['autodocs']
}

export default meta;

export const Basic: StoryObj<TypoComponent> = {
    args: {
        size: 'body',
        underlined: false,
        italic: false,
        bold: false
    },
    argTypes: {
        size: {
            control: 'select',
            options: [
            'hero','heading1','heading2','heading3',
            'body','label','button'
            ],
            table: {
                defaultValue: { summary: 'body' },
            },
        },
        underlined: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
            }
        },
        italic: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
            }
        },
        bold: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        }
    }
}