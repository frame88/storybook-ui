import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
/**
    Una buona tipografia facilita la lettura, guida l’attenzione dell’utente e rafforza l’identità visiva, contribuendo in modo essenziale all’esperienza complessiva.
 */

const meta: Meta<ButtonComponent> = {
    title: 'components/Button',
    component: ButtonComponent,
    tags: ['autodocs']
}

export default meta;

export const Basic: StoryObj<ButtonComponent> = {
    args: {
        variant: 'primary',    
        size: 'medium',    
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary','secondary', 'disabled', 'delete', 'basil', 'cheese', 'peppe'
            ],
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: [
                'small','medium', 'large'
            ],
            table: {
                defaultValue: { summary: 'medium' },
            },
        },
    }
}