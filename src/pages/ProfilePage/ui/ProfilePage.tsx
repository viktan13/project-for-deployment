import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';

export interface ProfilePageProps {
    classname?: string
}

const ProfilePage = ({ classname }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const { id } = useParams<{id: string}>();

    return (
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
