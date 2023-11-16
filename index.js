const { MongoClient } = require('mongodb');

// Укажите адрес вашего сервера MongoDB, например, "mongodb://localhost:27017/"
const mongoUri = "mongodb://localhost:27017/";

// Создайте подключение к MongoDB
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Подключение к MongoDB
client.connect()
    .then(() => {
        console.log("Подключено к MongoDB");

        // Выберите базу данных (если ее нет, она будет создана при первом доступе)
        const db = client.db('имя_базы_данных');

        // Пример: вставка документа в коллекцию
        const collection = db.collection('имя_коллекции');
        const document = { ключ: 'значение' };
        return collection.insertOne(document);
    })
    .then(result => {
        console.log("Документ успешно вставлен:", result);
    })
    .catch(error => {
        console.error("Ошибка при подключении к MongoDB:", error);
    })
    .finally(() => {
        // Закройте соединение с MongoDB
        client.close();
    });
