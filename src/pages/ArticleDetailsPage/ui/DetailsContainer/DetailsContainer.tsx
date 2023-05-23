import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

export interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams();

    return (
        <Card
            max
            border="partial"
            className={className}
            padding="24"
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
