const fs = require('fs');
const xlsx = require('xlsx');

// Чтение данных из JSON файла
const data = JSON.parse(fs.readFileSync('./pdermreg.requests.json', 'utf8'));

// Функция для разделения ФИО
function splitFullName(fullName) {
    const parts = fullName.split(' ');
    return {
        lastName: parts[0] || '',
        firstName: parts[1] || '',
        middleName: parts.slice(2).join(' ') || ''
    };
}

// Преобразование данных в формат для Excel с проверкой на deleted: true и дубликаты по email и типу участия
const uniqueEntries = new Set();
const formattedData = data
    .filter(item => !item.deleted)  // Фильтрация объектов с deleted: true
    .filter(item => {
        const uniqueKey = `${item.email}-${item.meta.participationType}`;
        if (uniqueEntries.has(uniqueKey)) {
            return false;  // Удаление дубликатов по email и типу участия
        } else {
            uniqueEntries.add(uniqueKey);
            return true;
        }
    })
    .map(item => {
        const { lastName, firstName, middleName } = splitFullName(item.customer);
        return {
            'Фамилия': lastName,
            'Имя': firstName,
            'Отчество': middleName,
            'Телефон': item.meta.phone,
            'Почта': item.email,
            'Формат участия': item.meta.participationType
        };
    });

// Создание новой книги Excel
const workbook = xlsx.utils.book_new();

// Создание листа из данных
const worksheet = xlsx.utils.json_to_sheet(formattedData);

// Добавление листа в книгу
xlsx.utils.book_append_sheet(workbook, worksheet, 'Participants');

// Запись книги в файл
xlsx.writeFile(workbook, 'participants.xlsx');

console.log('Excel файл успешно создан.');
