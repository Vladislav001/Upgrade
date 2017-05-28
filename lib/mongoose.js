// Именно этот файл все инклюдят для работы с mongoose-ом
var mongoose = require('mongoose'); //высокоуровневый и позволяет оперировать полноценными js-классами
var config = require('../config'); // соединяемся

// Если выдает deprecationwarning mongoose mpromise !
mongoose.Promise = global.Promise;

// Через двоеточие получаем подъобьекты (синтаксис 'nconf')
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;
