import { UISchema } from '../types/UISchema';
import { uiActions, uiReducer } from './UISlice';

describe('UISlice.test', () => {
    test('test set scroll position', () => {
        const state: UISchema = { scroll: {} };
        expect(uiReducer(state as UISchema, uiActions.setScrollPosition({ path: '/articles', position: 500 }))).toEqual({
            scroll: {
                '/articles': 500,
            },
        });
    });
});
