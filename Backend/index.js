// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Пример маршрута GET
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Данные получены',
    items: [
      { id: 1, name: 'Элемент 1' },
      { id: 2, name: 'Элемент 2' },
    ],
  };

  res.json(data);
});

// Пример маршрута POST
app.post('/api/data', (req, res) => {
  const newItem = {
    id: req.body.id,
    name: req.body.name,
  };

  // Здесь вы можете сохранить новый элемент в базе данных или другом хранилище
  res.json({ message: 'Элемент успешно добавлен', item: newItem });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
