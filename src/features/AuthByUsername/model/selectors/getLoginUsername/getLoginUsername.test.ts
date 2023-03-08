import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'adfinlake',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('adfinlake');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});