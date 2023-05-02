import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: false,
        error: '',
        page: 1,
        limit: 5,
        hasMore: false,
        view: ArticleView.SMALL,
        order: 'desc',
        sort: ArticleSortField.CREATED,
        search: '',
        type: ArticleType.IT,
        _inited: true,
        ids: ['1', '2', '3', '4', '5'],
        entities: {
            1: {
                id: '1',
                title: 'Kotlin news 2019',
                subtitle: 'Что нового в JS за 2022 год?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 94002,
                createdAt: '26.02.2019',
                type: [
                    ArticleType.IT,
                ],
            },
            2: {
                id: '2',
                title: 'Kotlin news 2019',
                subtitle: 'Что нового в JS за 2022 год?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 94002,
                createdAt: '26.02.2019',
                type: [
                    ArticleType.IT,
                ],
            },
            3: {
                id: '3',
                title: 'Kotlin news 2019',
                subtitle: 'Что нового в JS за 2022 год?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 94002,
                createdAt: '26.02.2019',
                type: [
                    ArticleType.IT,
                ],
            },
            4: {
                id: '4',
                title: 'Kotlin news 2019',
                subtitle: 'Что нового в JS за 2022 год?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 94002,
                createdAt: '26.02.2019',
                type: [
                    ArticleType.IT,
                ],
            },
            5: {
                id: '5',
                title: 'Kotlin news 2019',
                subtitle: 'Что нового в JS за 2022 год?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 94002,
                createdAt: '26.02.2019',
                type: [
                    ArticleType.IT,
                ],
            },
        },

    },
})];
