import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/deprecated/Card';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/Button';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

export interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startCount: number) => void;
    onAccept?: (startCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('YourFeedback')}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack
                gap="8"
                align="center"
                max
            >
                <Text title={starsCount ? t('ThankRating') : title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack
                        max
                        gap="32"
                    >
                        {modalContent}
                        <HStack
                            gap="16"
                            justify="end"
                            max
                        >
                            <Button
                                data-testid="RatingCard.Cancel"
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={cancelHandle}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Accept"
                                onClick={acceptHandle}
                            >
                                {t('Accept')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    lazy
                    onClose={cancelHandle}
                >
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                            fullwidth
                        >
                            {t('Accept')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
