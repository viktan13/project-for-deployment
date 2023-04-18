import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

// @ts-ignore
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>MORE</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },

    ],
};

export const DisabledMenuItem = Template.bind({});
DisabledMenuItem.args = {
    trigger: <Button>MORE</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
            disabled: true,
        },
        {
            content: 'third',
        },

    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>MORE</Button>,
    direction: 'bottom right',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },

    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>MORE</Button>,
    direction: 'bottom left',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },

    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>MORE</Button>,
    direction: 'top left',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },

    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>MORE</Button>,
    direction: 'top right',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },

    ],
};
