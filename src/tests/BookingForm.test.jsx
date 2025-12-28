import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = vi.fn();
    const mockSubmitForm = vi.fn();

    it('Renders the booking form heading', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    });

    it('Renders the choose date label', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const labelElement = screen.getByLabelText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    it('Submit button is disabled initially (or by default validation state)', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeDisabled();
    });

    it('Validates form and enables submit button', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        
        const dateInput = screen.getByLabelText("Choose date");
        fireEvent.change(dateInput, { target: { value: "2023-12-25" } });

        const timeSelect = screen.getByLabelText("Choose time");
        fireEvent.change(timeSelect, { target: { value: "17:00" } });

        const guestsInput = screen.getByLabelText("Number of guests");
        fireEvent.change(guestsInput, { target: { value: "2" } });

        const occasionSelect = screen.getByLabelText("Occasion");
        fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeEnabled();
    });

    it('Calls submitForm with correct data when submitted', () => {
         render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        
        const dateInput = screen.getByLabelText("Choose date");
        fireEvent.change(dateInput, { target: { value: "2023-12-25" } });

        const timeSelect = screen.getByLabelText("Choose time");
        fireEvent.change(timeSelect, { target: { value: "17:00" } });

        const guestsInput = screen.getByLabelText("Number of guests");
        fireEvent.change(guestsInput, { target: { value: "2" } });

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: "2023-12-25",
            time: "17:00",
            guests: 2,
            occasion: "Birthday" // Default if not changed
        });
    });

    it('HTML5 validation attributes are applied', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
        
        const dateInput = screen.getByLabelText("Choose date");
        expect(dateInput).toHaveAttribute('required');

        const guestsInput = screen.getByLabelText("Number of guests");
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });
});
