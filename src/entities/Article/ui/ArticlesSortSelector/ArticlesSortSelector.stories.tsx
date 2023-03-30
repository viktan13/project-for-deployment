import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesSortSelector } from './ArticlesSortSelector';

export default {
    title: 'pages/ArticlesSortSelector',
    component: ArticlesSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesSortSelector>;

// @ts-ignore
const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => <ArticlesSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
