const form = document.getElementById('age-calculator');
const resultElement = document.getElementById('result');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's date of birth
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Create a new Date object for the user's date of birth
    const birthDate = new Date(year, month - 1, day);

    // Create a new Date object for the current date
    const currentDate = new Date();

    // Calculate the user's age
    const age = calculateAge(birthDate, currentDate);

    // Display the result
    resultElement.textContent = `You are ${age} years old.`;
});

// Function to calculate the age
function calculateAge(birthDate, currentDate) {
    // Calculate the difference in years
    const years = currentDate.getFullYear() - birthDate.getFullYear();

    // If the current month is less than the birth month, subtract 1 from the years
    if (currentDate.getMonth() < birthDate.getMonth()) {
        return years - 1;
    } else if (currentDate.getMonth() === birthDate.getMonth()) {
        // If the current month is the same as the birth month, check the day
        if (currentDate.getDate() < birthDate.getDate()) {
            return years - 1;
        }
    }

    // Return the calculated age
    return years;
}