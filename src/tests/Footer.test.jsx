import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('Footer Component', () => {
    it('renders company information', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Footer />
                </ThemeProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Quality residential plots/i)).toBeInTheDocument();
        expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
        expect(screen.getByText(/Company/i)).toBeInTheDocument();
    });

    it('renders social links', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Footer />
                </ThemeProvider>
            </MemoryRouter>
        );

        const socialLinks = screen.getAllByLabelText(/Social Link/i);
        expect(socialLinks).toHaveLength(4);
    });
});
