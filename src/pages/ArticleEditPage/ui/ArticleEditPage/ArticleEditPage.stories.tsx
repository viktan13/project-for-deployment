import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof ArticleEditPage>;

// @ts-ignore
const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
