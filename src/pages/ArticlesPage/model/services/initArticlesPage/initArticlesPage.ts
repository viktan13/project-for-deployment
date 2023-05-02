import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromURl = searchParams.get('order') as SortOrder;
            const sortFromURl = searchParams.get('sort') as ArticleSortField;
            const searchFromURl = searchParams.get('search');
            const typeFromURl = searchParams.get('type') as ArticleType;

            if (orderFromURl) {
                dispatch(articlesPageActions.setOrder(orderFromURl));
            }

            if (sortFromURl) {
                dispatch(articlesPageActions.setSort(sortFromURl));
            }

            if (searchFromURl) {
                dispatch(articlesPageActions.setSearch(searchFromURl));
            }

            if (typeFromURl) {
                dispatch(articlesPageActions.setType(typeFromURl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
