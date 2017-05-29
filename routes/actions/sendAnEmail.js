// Рассылка почты
var nodemailer = require('nodemailer'); // Модуль для рассылки

exports.get = function(req, res, next) {
// Создание рассыльщика(откуда шлем)
var transporter = nodemailer.createTransport({
service: 'yandex',
auth: {
  user: '*******@yandex.ru',
  pass: '*******'
}
});

//Функция рассылки, т.е откуда->куда, и что шлем , (через запятую можно указать несколько адресатов)
var mailOptions = {
from: '*******@yandex.ru',
to: '*******@gmail.com',
subject: 'Sending Email using Node.js',
html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(err, info){
if (err) {
  console.log(err);
} else {
  console.log('Email sent: ' + info.response);
}
});
};
