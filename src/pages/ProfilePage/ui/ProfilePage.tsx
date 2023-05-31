import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';

export interface ProfilePageProps {
    classname?: string;
}

const ProfilePage = ({ classname }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) return null;

    return (
        <Page data-testid="ProfilePage">
            <VStack
                max
                gap="16"
            >
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
