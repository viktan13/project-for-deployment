import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const profile: Profile = {
    id: '1',
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
        id: '1',
    },
    decorators: [
        withMock,
        // (Story) => (
        //     <MemoryRouter initialEntries={['/profile/1']}>
        //         <Routes>
        //             <Route
        //                 path="/profile/:id"
        //                 element={<Story />}
        //             />
        //         </Routes>
        //     </MemoryRouter>
        // ),
        StoreDecorator({
            profile: {
                form: profile,
                data: {
                    id: '1',
                },
            },
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: '4',
                    },
                ],
            },
        ],
    },
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
