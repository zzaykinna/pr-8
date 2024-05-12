require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')


const PORT = process.env.PORT || 5000

const nodemailer = require('nodemailer');

// Создаем транспорт для отправки сообщений
let transporter = nodemailer.createTransport({
    service: 'mail',
    auth: {
        user: 'sofia_zaykina@mail.ru',
        pass: 'danilova1981'
    }
});

// Настройки для отправки сообщения
let mailOptions = {
    from: 'sofia_zaykina@mail.ru',
    to: 'recipient-email@example.com',
    subject: 'Тестовое сообщение',
    text: 'Привет, это тестовое сообщение!'
};

// Отправляем сообщение
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email успешно отправлен: ' + info.response);
    }
});

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()