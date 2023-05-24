import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
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

export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const PrimaryRedesignedDark = Template.bind({});
PrimaryRedesignedDark.args = primaryArgs;
PrimaryRedesignedDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
