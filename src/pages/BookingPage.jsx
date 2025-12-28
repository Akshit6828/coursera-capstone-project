import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

// Reducer for available times
const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Fetch available times based on the selected date
            return fetchAPI(action.payload);
        default:
            return state;
    }
};

const initializeTimes = () => {
    // Initial available times for today
    const today = new Date();
    return fetchAPI(today);
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate('/confirmed');
        }
    };

    return (
        <main className="booking-page">
            <div className="container booking-container">
                <h1>Reserve a Table</h1>
                <BookingForm 
                    availableTimes={availableTimes} 
                    dispatch={dispatch} 
                    submitForm={submitForm} 
                />
            </div>
        </main>
    );
};

export default BookingPage;
