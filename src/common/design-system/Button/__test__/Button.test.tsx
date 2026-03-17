import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  Button from '../Button'; 

describe('Button component', () => {
    it('renders the button with the correct text', () => {
        render(<Button onClick={() => {}}>Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    })
    it('calls the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        await userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
