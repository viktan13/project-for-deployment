import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'pages/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

// @ts-ignore
const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
