const model = require('../models/commentModel');

exports.getHomePage = (req, res) => {
	const comments = model.readComments();
	res.render('index', { comments });
};

exports.addComment = (req, res) => {
	const { username, password, comment, exposeSensitiveData, enableXSS } = req.body;
	console.log(username, password, comment, exposeSensitiveData, enableXSS);
	res.redirect('/');
};
