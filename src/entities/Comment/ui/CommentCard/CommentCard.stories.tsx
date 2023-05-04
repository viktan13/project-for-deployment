import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

// @ts-ignore
const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'Vasya',
            avatar: 'https://tse4.mm.bing.net/th?id=OIP.9C-0Cr0tc3rls5s5N9GOuQHaE8&pid=Api&P=0',
        },
        text: 'Hello guys',
    },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
