import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionToClass } from '../../styles/const';
import { AppLink } from '../../../AppLink/AppLink';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [
        mapDirectionToClass[direction],
    ];

    return (
        <Menu as="div" className={classNames('', {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }:{active: boolean}) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={`dropdown-item-${index}`}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            key={`dropdown-item-${index}`}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
