import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
    title: 'pages/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesInfiniteList>;

// @ts-ignore
const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
