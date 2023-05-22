import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    articleDetailsData,
    articleDetailsError,
    articleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';

export interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(articleDetailsData);

    return (
        <>
            <HStack
                justify="center"
                max
                className={cls.avatarWrapper}
            >
                <Avatar
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </HStack>
            <VStack
                gap="4"
                data-testid="ArticleDetails.Info"
            >
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack
                    gap="8"
                    className={cls.articleInfo}
                >
                    <Icon
                        SVG={EyeIcon}
                        className={cls.icon}
                    />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack
                    gap="8"
                    className={cls.articleInfo}
                >
                    <Icon
                        SVG={CalendarIcon}
                        className={cls.icon}
                    />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(articleDetailsData);

    return (
        <>
            <Text
                title={article?.title}
                size="l"
                bold
            />
            <Text
                text={article?.subtitle}
                size="l"
            />
            <AppImage
                fallback={
                    <Skeleton
                        height={420}
                        width="100%"
                        border="16px"
                    />
                }
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const isLoading = useSelector(articleDetailsIsLoading);
    const error = useSelector(articleDetailsError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <SkeletonDeprecated
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                title={t('Article_Error')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
