const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const commentController = require('./controllers/commentController');

app.get('/', commentController.getHomePage);
app.post('/add', commentController.addComment);
app.post('/delete/:id', commentController.deleteComment);

app.listen(3000, () => {
	console.log('App is running on http://localhost:3000');
});
