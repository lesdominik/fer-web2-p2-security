const model = require('../models/commentModel');

exports.getHomePage = (req, res) => {
	const comments = model.readComments();
	res.render('index', { comments });
};

exports.addComment = async (req, res) => {
	const { username, password, comment, exposeSensitiveData, enableXSS } = req.body;
	await model.addComment(username, password, comment, { exposeSensitiveData, enableXSS });
	res.redirect('/');
};

exports.deleteComment = (req, res) => {
	model.deleteComment(req.params.id);
	res.redirect('/');
};
