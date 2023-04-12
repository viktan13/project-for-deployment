import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
    'id'?: string,
    'name'?: string,
    'lastName'?: string,
    'age'?: number,
    'currency'?: Currency,
    'country'?: Country,
    'city'?: string,
    'username'?: string,
    'avatar'?: string
}
