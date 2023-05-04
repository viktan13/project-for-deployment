import { classNames } from './classNames';

describe('className', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional param', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hoverable scrollable';
        expect(
            classNames('someClass', { hoverable: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hoverable';
        expect(
            classNames('someClass', { hoverable: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hoverable';
        expect(
            classNames(
                'someClass',
                { hoverable: true, scrollable: undefined },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });
});
