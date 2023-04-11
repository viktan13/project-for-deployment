import { Country } from '../../../../../entities/Country/model/types/country';
import { Currency } from '../../../../../entities/Currency/model/types/currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    username: 'admin',
    age: 22,
    lastName: 'ulbi tv',
    name: 'asd',
    city: 'asf',
    country: Country.USA,
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, name: '', lastName: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
