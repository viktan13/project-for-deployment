import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const rating = data?.[0];

    const handleRateProfile = useCallback(
        (startCount: number, feedback?: string) => {
            rateProfileMutation({
                profileId,
                userId: userData?.id ?? '',
                rate: startCount,
                feedback,
            });
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onCancel = useCallback(
        (startCount: number) => {
            handleRateProfile(startCount);
        },
        [handleRateProfile],
    );

    const onAccept = useCallback(
        (startCount: number, feedback?: string) => {
            handleRateProfile(startCount, feedback);
        },
        [handleRateProfile],
    );

    if (isLoading)
        return (
            <Skeleton
                width="100%"
                height={120}
            />
        );

    return (
        <RatingCard
            className={className}
            title={t('RateProfile')}
            feedbackTitle={t('ProfileFeedback')}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
});

export default ProfileRating;
