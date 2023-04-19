import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '../../../../../entities/Country/model/types/country';
import { getProfileForm } from './getProfileForm';
import { Currency } from '../../../../../entities/Currency/model/types/currency';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            country: Country.USA,
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
