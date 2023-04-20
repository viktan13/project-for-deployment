import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

// @ts-ignore
const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {
    selectedStars: 5,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
