import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Action, Reducer } from '@reduxjs/toolkit';
import {
    componentRender,
    componentRenderOptions,
} from '@/shared/lib/tests/componentsRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { ProfileSchema } from '../../model/types/editableProfileCardSchema';
import { profileReducer } from '../../model/profileSlice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    name: 'admin',
    lastName: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Moscow',
    username: 'admin213',
};

const options: componentRenderOptions = {
    initialState: {
        profile: {
            isLoading: false,
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer as Reducer<
            ProfileSchema | undefined,
            Action<any>
        >,
    },
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, options);
    });

    test('Test switching to edit mode', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('On button Cancel', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCardProps.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCardProps.LastName'));
        expect(screen.getByTestId('ProfileCardProps.FirstName')).toHaveValue(
            '',
        );
        expect(screen.getByTestId('ProfileCardProps.LastName')).toHaveValue('');

        await userEvent.type(
            screen.getByTestId('ProfileCardProps.FirstName'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCardProps.LastName'),
            'user',
        );
        expect(screen.getByTestId('ProfileCardProps.FirstName')).toHaveValue(
            'user',
        );
        expect(screen.getByTestId('ProfileCardProps.LastName')).toHaveValue(
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCardProps.FirstName')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCardProps.LastName')).toHaveValue(
            'admin',
        );
    });

    test('Validation Error', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCardProps.FirstName'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCardProps.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('If no errors the "PUT" request to the server', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCardProps.FirstName'));
        await userEvent.type(
            screen.getByTestId('ProfileCardProps.FirstName'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutRequest).toBeCalledWith('/profile/1', {
            id: '1',
            name: 'user',
            lastName: 'admin',
            age: 465,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin213',
        });
    });
});
