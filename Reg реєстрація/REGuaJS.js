function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const entryDate = document.getElementById('entryDate').value;
    const email = document.getElementById('email').value;

    // Створюємо об'єкт з даними
    const formData = {
        'Name': name,
        'Surname': surname,
        'Username': username,
        'entryDate': entryDate,
        'Email': email
    };

    // Відправляємо дані до Google Таблиці (замініть URL на свій)
    fetch('https://script.google.com/macros/s/AKfycbz29ADCinQEKGjWdEGcy2aqtJQk2sEMHUgm1jUv_fGOVzoWI8W3BrylngwiHgwi2Ce5/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => console.log('Дані надіслано успішно'))
    .catch(error => console.error('Помилка надсилання даних:', error));

    // Запобігаємо відправку форми за замовчуванням
    return false;
}