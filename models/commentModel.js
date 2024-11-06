const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const filePath = path.join(__dirname, '../db/comments.json');

function readComments() {
	const data = fs.readFileSync(filePath, 'utf8');
	return JSON.parse(data || []);
}

function addComment() {}

function deleteComment() {}

module.exports = { readComments, addComment, deleteComment };
