const fs = require('fs');

// Загрузка JSON из файлов
const json1 = JSON.parse(fs.readFileSync('9_11.json', 'utf8'));
const json2 = JSON.parse(fs.readFileSync('pdermreg.users.json', 'utf8'));

// Результирующий массив
const result = [];

// Проход по всем объектам из первого JSON
json1.forEach((item1) => {
    const email = item1.email;

    // Поиск соответствующего объекта во втором JSON по email
    const matchedUser = json2.find((item2) => item2.email === email);

    if (matchedUser) {
        // Добавление нужных полей в результат
        result.push({
            lastName: matchedUser.lastName,
            firstName: matchedUser.firstName,
            middleName: matchedUser.middleName,
            email: matchedUser.email,
            city: matchedUser.city,
            workplace: matchedUser.workplace,
            position: matchedUser.position,
        });
    }
});


// Сохранение результата в файл result.json
fs.writeFileSync('result.json', JSON.stringify(result, null, 2), 'utf8');

console.log('Результат сохранен в файл result.json ',result.length," записей");