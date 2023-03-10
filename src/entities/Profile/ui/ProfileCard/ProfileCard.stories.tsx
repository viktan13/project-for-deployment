import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        name: 'Viktor',
        lastName: 'Dzyuba',
        age: 50,
        currency: Currency.USD,
        city: 'Palatine',
        username: 'admin',
        avatar: 'https://image.freepik.com/free-vector/hacker-mascot-logo-illustration_317408-106.jpg',
        country: Country.USA,

    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
