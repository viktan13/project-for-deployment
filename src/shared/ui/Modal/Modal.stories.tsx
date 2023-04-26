import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum was introduced to the digital world in the mid-1980s, '
        + 'when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.\n'
        + '                Other popular word processors ,\n'
        + '                including Pages and Microsoft Word ,\n'
        + '                have since adopted Lorem ipsum , [2] as have many LaTeX\n'
        + '                packages, [3] [4] [5] web content '
        + 'managers such as Joomla! and WordPress ,\n'
        + '                and CSS libraries such as Semantic UI.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum was introduced to the digital world in the mid-1980s, '
        + 'when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.\n'
        + '                Other popular word processors ,\n'
        + '                including Pages and Microsoft Word ,\n'
        + '                have since adopted Lorem ipsum , [2] as have many LaTeX\n'
        + '                packages, [3] [4] [5] web content '
        + 'managers such as Joomla! and WordPress ,\n'
        + '                and CSS libraries such as Semantic UI.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
