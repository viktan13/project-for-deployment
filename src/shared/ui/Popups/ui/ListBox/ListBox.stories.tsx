import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{
                width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'MORE',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'MORE',
    direction: 'top right',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'MORE',
    direction: 'top left',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'MORE',
    direction: 'bottom right',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'MORE',
    direction: 'bottom left',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};
