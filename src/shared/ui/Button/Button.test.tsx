import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('BUTTON', () => {
    test('Test render of the button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDOM();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
