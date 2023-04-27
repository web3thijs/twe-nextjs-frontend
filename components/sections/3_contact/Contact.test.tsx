import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

describe('Contact component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('renders the Contact component correctly', () => {
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeInTheDocument();
  });

  test('Title component receives correct props', () => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Vraag uw offerte aan of stel een vraag')).toBeInTheDocument();
  });

  test('Form component is rendered', () => {
    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();
  });

  test('renders contact information elements with correct text and links', () => {
    const emailLink = screen.getByRole('link', { name: /info@tw-elek.be/i });
    expect(emailLink.getAttribute('href')).toBe('mailto: info@tw-elek.be');

    const phoneLink = screen.getByRole('link', { name: /\+32 471 25 39 84/i });
    expect(phoneLink.getAttribute('href')).toBe('tel: +32471 25 39 84');

    const addressLink = screen.getByRole('link', { name: /Boonhofstraat 54, Dessel/i });
    expect(addressLink.getAttribute('href')).toBe('https://www.google.com/maps/place/TW+Elektriciteitswerken/@51.2420141,5.1175145,17z/data=!4m5!3m4!1s0x47c6cbe8cf8533e3:0xf48f5de54e148f81!8m2!3d51.2420108!4d5.1196978');
  });
});