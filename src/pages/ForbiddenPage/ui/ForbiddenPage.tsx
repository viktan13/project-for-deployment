import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

export interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames('', {}, [className])}
        >
            <Text
                theme={TextTheme.ERROR}
                title={t('NotAuthorized')}
            />
        </Page>
    );
};

export default ForbiddenPage;
