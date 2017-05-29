// Для загрузки файлов на сервер (в спец.папку)
// https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp
var formidable = require('formidable');
var fs = require('fs')

exports.get = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}

exports.post = function(req, res) {
  if (req.url == '/fileUpload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/1/Desktop/STARTUP-master/public/imagesUpload/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="fileUpload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }

};
