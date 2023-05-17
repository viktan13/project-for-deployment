import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outline',
    disabled: true,
};
