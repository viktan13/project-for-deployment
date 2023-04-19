import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropDownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionToClass } from '../../styles/const';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        children,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [
        mapDirectionToClass[direction],
    ];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
