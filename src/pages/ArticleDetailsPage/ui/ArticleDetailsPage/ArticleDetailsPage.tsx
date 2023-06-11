import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecomendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { Card } from '@/shared/ui/redesigned/Card';

export interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams();

    const reducers: ReducersList = {
        articleDetailsPage: articleDetailsPageReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.ArticleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack
                                    gap="16"
                                    max
                                >
                                    <DetailsContainer />
                                    <ToggleFeatures
                                        feature="isArticleRatingEnabled"
                                        on={<ArticleRating articleId={id} />}
                                        off={
                                            <Card>
                                                {t('ArticleRatingSoon')}
                                            </Card>
                                        }
                                    />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack
                            gap="16"
                            max
                        >
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ToggleFeatures
                                feature="isArticleRatingEnabled"
                                on={<ArticleRating articleId={id} />}
                                off={
                                    <CardDeprecated>
                                        {t('ArticleRatingSoon')}
                                    </CardDeprecated>
                                }
                            />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
