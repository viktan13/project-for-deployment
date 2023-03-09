import { Country } from '../../../Country/model/types/country';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from '../../../Currency/model/types/currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    lastName: 'ulbi tv',
    name: 'asd',
    city: 'asf',
    country: Country.USA,
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('test onCancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data, readonly: true, validateErrors: undefined, form: { name: '' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.onCancelEdit())).toEqual({ readonly: true, data, form: data });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { name: '123' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ name: '234' }))).toEqual({
            form: {
                name: '234',
            },
        });
    });

    test('test updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
