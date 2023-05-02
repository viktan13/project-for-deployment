import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/AvatarDropdown/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

// @ts-ignore
const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                avatar: 'https://tse4.mm.bing.net/th?id=OIP.9C-0Cr0tc3rls5s5N9GOuQHaE8&pid=Api&P=0',
            },
        },
    }),
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                avatar: 'https://tse4.mm.bing.net/th?id=OIP.9C-0Cr0tc3rls5s5N9GOuQHaE8&pid=Api&P=0',
                roles: [
                    // @ts-ignore
                    'ADMIN',
                ],
            },
        },
    }),
];
