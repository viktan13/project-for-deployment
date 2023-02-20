import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Login')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string,max-len */}
                Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing
                templates for its desktop publishing program PageMaker.
                Other popular word processors ,
                including Pages and Microsoft Word ,
                have since adopted Lorem ipsum , [2] as have many LaTeX
                packages, [3] [4] [5] web content managers such as Joomla! and WordPress ,
                and CSS libraries such as Semantic UI.
            </Modal>
        </div>
    );
};
