import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { articleDetailsData } from '@/entities/Article';

export const getCanEditArticle = createSelector(
    getUserAuthData,
    articleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }
        return article.user.id === user.id;
    },
);
