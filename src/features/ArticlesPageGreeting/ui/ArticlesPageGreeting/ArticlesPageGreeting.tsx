import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlesPageGreeting = memo(() => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [isArticlesPageWasOpened, dispatch]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Welcome')}
            text={t('YouCan')}
        />
    );

    if (isMobile) {
        return (
            <Drawer
                lazy
                onClose={onClose}
                isOpen={isOpen}
            >
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            lazy
            onClose={onClose}
            isOpen={isOpen}
        >
            {text}
        </Modal>
    );
});
