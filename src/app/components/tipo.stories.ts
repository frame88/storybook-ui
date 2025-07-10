import { Meta, StoryObj } from '@storybook/angular';
import { TypoComponent } from "./typo.component";

const meta: Meta<TypoComponent> = {
    title: 'fundamental/Typography',
    component: TypoComponent
}

export default meta;

export const Basic: StoryObj<TypoComponent> = {
    args: {
        size: 'smallbody',
        underlined: false,
        italic: false,
        bold: false
    },
    argTypes: {
    size: {
        control: 'select',
        options: [
        'title','subtitle','heading1','heading2','heading3',
        'heading4','heading5','heading6','body','smallbody',
        'label','button','caption'
        ]
    }
    }
}