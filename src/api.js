/**
 * Seeded random number generator
 * This is used to generate consistent available times for a given date.
 */
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Simulates fetching available booking times for a specific date.
 * @param {Date} date - The date to check availability for.
 * @returns {Array<string>} - A list of available time slots.
 */
export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

/**
 * Simulates submitting booking data.
 * @param {Object} formData - The booking form data.
 * @returns {boolean} - Returns true if submission is successful.
 */
export const submitAPI = function (formData) {
  console.log("Booking submitted:", formData);
  return true;
};
