import { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    // Form state
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    
    // Validation state
    const [isFormValid, setIsFormValid] = useState(false);

    // Initial check or reset time when times update
    useEffect(() => {
        // If the current selected time is not in the new availableTimes list, reset it.
        // Unless it's empty, in which case we might want to default to the first one?
        // But for better UX, let user pick.
        if (availableTimes.length > 0 && !availableTimes.includes(time)) {
             setTime(availableTimes[0]);
        }
    }, [availableTimes, time]);

    useEffect(() => {
        validateForm();
    }, [date, time, guests, occasion]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        // Dispatch date change to update available times
        // We need to pass the date object to dispatch for the API simulation
        if (newDate) {
             dispatch({ type: 'UPDATE_TIMES', payload: new Date(newDate) });
        }
    };

    const validateForm = () => {
        const valid = date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";
        setIsFormValid(valid);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form" aria-label="Table booking form">
            <fieldset>
                <legend>Book Now</legend>

                {/* Date Selection */}
                <div className="form-group">
                    <label htmlFor="res-date">Choose date</label>
                    <input 
                        type="date" 
                        id="res-date" 
                        value={date} 
                        onChange={handleDateChange} 
                        required 
                        aria-required="true"
                    />
                </div>

                {/* Time Selection */}
                <div className="form-group">
                    <label htmlFor="res-time">Choose time</label>
                    <select 
                        id="res-time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                        aria-required="true"
                    >
                        {availableTimes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>

                {/* Guests Selection */}
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests" 
                        value={guests} 
                        onChange={(e) => setGuests(parseInt(e.target.value))} 
                        required 
                        aria-required="true"
                    />
                </div>

                {/* Occasion Selection */}
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select 
                        id="occasion" 
                        value={occasion} 
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                        aria-required="true"
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <div className="form-group submit-group">
                    <input 
                        type="submit" 
                        value="Make Your reservation" 
                        disabled={!isFormValid} 
                        aria-label="Make your reservation"
                    />
                </div>
            </fieldset>
        </form>
    );
};

export default BookingForm;
