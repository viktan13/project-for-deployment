import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../slices/addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentForm';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('5214352'),
            ),
        ).toEqual({ text: '5214352' });
    });
});
