document.addEventListener('DOMContentLoaded', () => {
    const ageElement = document.getElementById('age')

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const birthYear = 2008;
    const birthMonth = 5;

    let age = currentYear - birthYear;

    if(currentMonth < birthMonth){
        age--;
    }

    ageElement.textContent = `Age: ${age} years old`
})