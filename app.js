const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const { loggerMiddleware } = require('./middleware/loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});