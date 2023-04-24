import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';

export interface ProfilePageProps {
    classname?: string
}

const ProfilePage = ({ classname }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const { id } = useParams<{id: string}>();

    if (!id) return null;

    return (
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
