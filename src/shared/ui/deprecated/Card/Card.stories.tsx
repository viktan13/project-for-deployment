import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

// @ts-ignore
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <Text
            title="Any text"
            text="it is a storybook test"
        />
    ),
};
