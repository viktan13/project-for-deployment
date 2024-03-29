import { ValidateProfileError } from '../../consts/editableProfileconsts';
import { Profile } from '../../../../../entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { name, lastName, age, city } = profile;

    const errors: ValidateProfileError[] = [];

    if (!name || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    return errors;
};
