import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('BUTTON', () => {
    test('Test render of the button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDOM();
    });

    test('Test clear theme', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
