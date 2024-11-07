const model = require('../models/commentModel');

exports.getHomePage = (req, res) => {
	const comments = model.readComments();
	console.log(comments);
	res.render('index', { comments });
};
