import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from '@/entities/Article';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Javascript news СВЕЖАЯ',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.04.2022',
                    type: [ArticleType.IT],
                },
                {
                    id: '2',
                    title: 'Javascript news СВЕЖАЯ',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.04.2022',
                    type: [ArticleType.IT],
                },
                {
                    id: '3',
                    title: 'Javascript news СВЕЖАЯ',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.04.2022',
                    type: [ArticleType.IT],
                },
                {
                    id: '4',
                    title: 'Javascript news СВЕЖАЯ',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.04.2022',
                    type: [ArticleType.IT],
                },
            ],
        },
    ],
};
