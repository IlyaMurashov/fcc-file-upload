const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const upload = multer();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '/public')));

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    file: req.file.originalname,
    size: req.file.size
  })
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});