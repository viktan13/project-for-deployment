import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

export interface ProfilePageProps {
    classname?: string
}

const ProfilePage = ({ classname }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <h1>
                    {t('Profile Page')}
                </h1>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
