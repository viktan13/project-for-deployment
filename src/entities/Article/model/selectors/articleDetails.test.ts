import { StateSchema } from 'app/providers/StoreProvider';
import { articleDetailsData, articleDetailsError, articleDetailsIsLoading } from './articleDetails';

describe('articleDetailsData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(articleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(articleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('articleDetailsIsLoading.test', () => {
    test('should return true', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading,
            },
        };
        expect(articleDetailsIsLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(articleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('articleDetailsError.test', () => {
    test('should return error string', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error,
            },
        };
        expect(articleDetailsError(state as StateSchema)).toBe('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(articleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
