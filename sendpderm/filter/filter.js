const fs = require('fs');

// Функция для фильтрации данных
function categorizeRegistration(data) {
    const offlineLow = [];
    const offlineHigh = [];
    const cutoffDate = new Date('2024-10-15T00:00:00Z'); // Дата отсечки

    data.forEach(registration => {
        const finishDate = new Date(registration.register_timestamp.$date);
        const amount = registration.transactions.initial.amountRub;

        // Сохраняем только нужные поля
        const filteredRegistration = {
            email: registration.email,
            customer: registration.customer,
            transactions: {
                initial: {
                    amountRub: registration.transactions.initial.amountRub
                }
            }
        };

        if (finishDate < cutoffDate) { // До 15 октября
            if (amount === 3000) {
                offlineLow.push(filteredRegistration);
            } else if (amount === 3500) {
                offlineHigh.push(filteredRegistration);
            }
        } else { // После 15 октября
            if (amount === 3500) {
                offlineLow.push(filteredRegistration);
            } else if (amount === 4000) {
                offlineHigh.push(filteredRegistration);
            }
        }
    });

    return { offlineLow, offlineHigh };
}

// Функция для чтения, фильтрации и записи данных
function filterAndSave(inputFilePath, lowOutputPath, highOutputPath) {
    // Чтение JSON файла
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла:', err);
            return;
        }

        // Преобразование данных из строки в JSON
        const registrations = JSON.parse(data);

        // Фильтрация данных
        const { offlineLow, offlineHigh } = categorizeRegistration(registrations);

        // Сохранение offlineLow
        fs.writeFile(lowOutputPath, JSON.stringify(offlineLow, null, 2), 'utf8', err => {
            if (err) {
                console.error('Ошибка записи файла offlineLow:', err);
            } else {
                console.log('offlineLow успешно сохранен!');
            }
        });

        // Сохранение offlineHigh
        fs.writeFile(highOutputPath, JSON.stringify(offlineHigh, null, 2), 'utf8', err => {
            if (err) {
                console.error('Ошибка записи файла offlineHigh:', err);
            } else {
                console.log('offlineHigh успешно сохранен!');
            }
        });
    });
}

// Вызов функции с путями к файлам
filterAndSave('pdermreg.requests.json', 'offlineLow.json', 'offlineHigh.json');
