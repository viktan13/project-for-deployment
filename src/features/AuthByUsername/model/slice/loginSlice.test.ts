import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('5214352'),
            ),
        ).toEqual({ username: '5214352' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('234234'),
            ),
        ).toEqual({ password: '234234' });
    });
});
