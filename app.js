const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Hello there.');
});

app.listen(3000, () => {
	console.log('App is running on http://localhost:3000');
});
