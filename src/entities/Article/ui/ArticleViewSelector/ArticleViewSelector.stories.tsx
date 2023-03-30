import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'pages/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

// @ts-ignore
const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};