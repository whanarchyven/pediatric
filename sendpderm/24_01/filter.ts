import * as fs from 'fs';

// Поля, которые нужно оставить
const allowedFields = [
    'email',
    'phone',
    'name',
    'fullName',
];

// Функция для фильтрации объекта
function filterObject(obj: any): any {
    return Object.keys(obj)
        .filter((key) => allowedFields.includes(key))
        .reduce((filtered: any, key) => {
            filtered[key] = obj[key];
            return filtered;
        }, {});
}

// Чтение JSON-файла
const inputFilePath = './default_db.users.json';
const outputFilePath = './output3.json';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    try {
        // Парсинг JSON
        const jsonArray = JSON.parse(data);

        if (!Array.isArray(jsonArray)) {
            throw new Error('Ожидается массив объектов в JSON.');
        }

        // Фильтрация объектов
        const filteredArray = jsonArray.map(filterObject);

        // Сохранение результата в новый JSON-файл
        fs.writeFile(outputFilePath, JSON.stringify(filteredArray, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
            } else {
                console.log('Фильтрованный JSON сохранён в', outputFilePath);
            }
        });
    } catch (parseError) {
        console.error('Ошибка парсинга JSON:', parseError);
    }
});
