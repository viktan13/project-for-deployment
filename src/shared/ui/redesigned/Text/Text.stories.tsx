import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
    variant: 'error',
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Lorem ipsum title',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'Lorem ipsum title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: 'Lorem ipsum title',
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: 'Lorem ipsum title',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
    size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
    size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Lorem ipsum title',
    text: 'Lorem ipsum text',
    size: 's',
};
