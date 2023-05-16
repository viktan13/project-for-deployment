import { DropDownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionToClass: Record<DropDownDirection, string> = {
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    'top right': cls.topRight,
    'top left': cls.topLeft,
};
