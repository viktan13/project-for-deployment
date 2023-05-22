import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img
                    src={block.src}
                    alt={block.title}
                    className={cls.image}
                />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Text
                                title={block.title}
                                align="center"
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
