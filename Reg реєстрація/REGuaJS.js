document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну подію натискання кнопки

    // Отримуємо дані з форми
    var formData = new FormData(this);
    
    // Тут можна робити що завгодно з даними
    // Наприклад, можна відправити їх на сервер або обробити локально
    
    // Виводимо дані у консоль для перевірки
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});

