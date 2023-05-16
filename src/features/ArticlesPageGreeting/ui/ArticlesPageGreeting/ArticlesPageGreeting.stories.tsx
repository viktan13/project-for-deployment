import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { ArticlesPageGreeting } from './ArticlesPageGreeting';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticlesPageGreeting',
    component: ArticlesPageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesPageGreeting>;

const Template: ComponentStory<typeof ArticlesPageGreeting> = (args) => (
    // @ts-ignore
    <ArticlesPageGreeting {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                jsonSettings: {
                    isArticlesPageWasOpened: false,
                },
            },
        },
    }),
];

Normal.parameters = {
    mockData: [
        {
            url: `/users/1`,
            method: 'PATCH',
            status: 200,
            body: {
                theme: Theme.LIGHT,
                isFirstVisit: true,
                isArticlesPageWasOpened: false,
            },
            response: {
                id: '1',
                username: 'admin',
                password: '123',
                features: {
                    isArticleRatingEnabled: true,
                    isCounterEnabled: true,
                },
                roles: ['ADMIN'],
                avatar: 'https://tse4.mm.bing.net/th?id=OIP.9C-0Cr0tc3rls5s5N9GOuQHaE8&pid=Api&P=0',
                jsonSettings: {
                    theme: 'app_light_theme',
                    isFirstVisit: true,
                    settingsPageHasBeenOpen: true,
                    isArticlesPageWasOpened: true,
                },
            },
        },
    ],
};
