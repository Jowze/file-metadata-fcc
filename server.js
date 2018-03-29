const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer();
const app = express();

app.listen(3000, function() {
	console.log('listening on 3000');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', upload.single('fileUpload'), (req, res, next) => {
	let fileObj = { fileSize: req.file.size };
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(fileObj));
});
