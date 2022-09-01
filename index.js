const express = require('express');
const app = express();
const port = 2232;

app.set("view engine", "ejs");

app.get('', (req, res) => {
	res.render('main', {code: 3234});
});

const serverInstance = app.listen(port, () => {
	console.log('Server is running on:', `http://localhost:${port}`);
});


