import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../../entities/Country/model/types/country';
import { getProfileError } from './getProfileError';
import { Currency } from '../../../../../entities/Currency/model/types/currency';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
