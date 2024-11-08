const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const filePath = path.join(__dirname, '../db/comments.json');

function readComments() {
	const data = fs.readFileSync(filePath, 'utf8');
	return JSON.parse(data || []);
}

function writeComments(comments) {
	fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
}

function sanitize(comment) {
	// sanitize comment
	return comment;
}

async function addComment(username, password, comment, options) {
	const comments = readComments();

	const hashedPass = options.exposeSensitiveData ? password : await bcrypt.hash(password, 10);
	const sanitizedComment = options.enableXSS ? comment.trim() : sanitize(comment.trim());

	comments.push({
		username,
		password: hashedPass,
		comment: sanitizedComment,
	});

	writeComments(comments);
}

function deleteComment() {}

module.exports = { readComments, addComment, deleteComment };
