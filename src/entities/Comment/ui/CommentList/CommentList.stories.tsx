import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof CommentList>;

// @ts-ignore
const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            user: { id: '1', username: 'Vasya' },
            text: 'hello world',
        },
        {
            id: '2',
            user: { id: '1', username: 'Vasya' },
            text: 'hello everybody',
        },
        {
            id: '3',
            user: { id: '1', username: 'Vasya' },
            text: 'You heard me',
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    comments: [],
    isLoading: true,
};
