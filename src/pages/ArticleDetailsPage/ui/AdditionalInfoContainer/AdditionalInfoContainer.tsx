import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { articleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

export interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    (props: AdditionalInfoContainerProps) => {
        const { className } = props;

        const article = useSelector(articleDetailsData);

        const navigate = useNavigate();
        const onArticleEdit = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article?.id));
            }
        }, [navigate, article]);

        if (!article) {
            return null;
        }

        return (
            <Card
                padding="24"
                border="partial"
                className={cls.card}
            >
                <ArticleAdditionalInfo
                    onEdit={onArticleEdit}
                    className={className}
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                />
            </Card>
        );
    },
);
