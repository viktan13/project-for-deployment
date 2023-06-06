import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const profile: Profile = {
    name: 'Viktor',
    lastName: 'Dzyuba',
    age: 50,
    currency: Currency.USD,
    city: 'Palatine',
    username: 'admin',
    avatar: 'https://image.freepik.com/free-vector/hacker-mascot-logo-illustration_317408-106.jpg',
    country: Country.USA,
};

export default {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/profile/1']}>
                <Routes>
                    <Route
                        path="/profile/:id"
                        element={<Story />}
                    />
                </Routes>
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof ProfilePage>;

// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
