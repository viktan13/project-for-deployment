import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('getAddCommentFormText.test', () => {
    test('should return data', () => {
        const text = 'Hello world';
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text,
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(text);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});

describe('getAddCommentFormError.test', () => {
    test('should return error', () => {
        const error = 'no data';
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error,
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toBe('no data');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
