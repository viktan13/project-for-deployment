import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (startCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId: articleId ?? '',
                    rate: startCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (startCount: number, feedback?: string) => {
            handleRateArticle(startCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (startCount: number) => {
            handleRateArticle(startCount);
        },
        [handleRateArticle],
    );

    if (isLoading)
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Skeleton
                        width="100%"
                        height={120}
                    />
                }
                off={
                    <SkeletonDeprecated
                        width="100%"
                        height={120}
                    />
                }
            />
        );

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('LeaveRating')}
            feedbackTitle={t('Feedback')}
            hasFeedback
        />
    );
});

export default ArticleRating;
