const model = require('../models/commentModel');

exports.getHomePage = (req, res) => {
	const comments = model.readComments();
	res.render('index', { comments });
};
