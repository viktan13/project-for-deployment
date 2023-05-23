import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon as IcanDeprecated } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

export interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    'data-testid': `StartRating${starNumber}`,
                    'data-selected': starNumber <= currentStarsCount,
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            starNumber <= currentStarsCount
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    height: size,
                    width: size,
                    SVG: StarIcon,
                    key: starNumber,
                    onMouseEnter: onHover(starNumber),
                    onMouseLeave: onLeave,
                    onClick: onClick(starNumber),
                };
                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Icon
                                clickable={!isSelected}
                                {...commonProps}
                            />
                        }
                        off={<IcanDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
