import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../@/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'full screen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#d3dadc' },
            { name: 'dark', class: Theme.DARK, color: '#0a2867' },
            { name: 'orange', class: Theme.ORANGE, color: '#b24f18' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
