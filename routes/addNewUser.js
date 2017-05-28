// Модуль регистрации

var User = require('../models/user').User;
var HttpError = require('../error').HttpError;
var AuthError = require('../models/user').AuthError;
var async = require('async');


exports.post = function(req, res, next) {
  // Получаем данные, которые передал посетитель
  var username = req.body.usernameNewUser;// P.S req.body - нестандартное св-во, но в app.js есть middleware bodyParser(аналог)
  var password = req.body.passwordNewUser;// т.к он подключен до роута, то к моменту работы роута, bodyParser гарантированно прочитал все post данные
  var email = req.body.emailNewUser; // разобрал их и записал все поля формы в соответствующие сва-ва req.body
  var gender = req.body.genderNewUser; // разобрал их и записал все поля формы в соответствующие сва-ва req.body

  User.addNewUser(username, password, email, gender, function(err, user) {
    if (err) {
      if (err instanceof AuthError) { // если это ошибка и AuthError
        return next(new HttpError(403, err.message)); //403 - отказ регистрации
      } else { // если какая-то друга ошибка: БД и т.п
        return next(err);
      }
    }


  });
  console.log(username, password, email, gender);
};
