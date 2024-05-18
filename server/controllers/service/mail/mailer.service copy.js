const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smpt.mail.ru',
    port: '465',
    secure: true,
    auth: {
        user: 'sofia_zaykina@mail.ru',
        pass: 'xGLJcJjupDFA4b25JgE3',
    }
}, {
    from: 'MuzOn <sofia_zaykina@mail.ru>'
})
sendTestMail = (email) => {
    transporter.sendMail({
        to: email,
        subject: 'Muz On',
        text: 'Приветики',
        html: `<h1>Улыбнитесь</h1>
 <i>Здравствуйте, ${email}</i>
 <p>вы успешно вошли в систему</p>`
    })

        .then(() => console.info("Письмо отправилось", email))
        .catch((err) =>
            console.warn("произошла ошибка", err)
        )
}
const Vxod = {
    sendTestMail: sendTestMail
}
module.exports = Vxod;