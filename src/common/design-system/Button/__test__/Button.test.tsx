import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import  Button from '../Button'; 

describe('Button component', () => {
    it('renders the button with the correct text', () => {
        render(<Button onClick={() => {}}>Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });
});
