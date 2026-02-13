import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('Header Component', () => {
    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    });
});
