import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./AddCommentForm')), 1500);
}));
