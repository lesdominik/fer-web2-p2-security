function togglePassword(commentId) {
	const password = document.getElementById(`pass-${commentId}`);
	const toggleBtn = document.getElementById(`btn-${commentId}`);

	if (password.style.display === 'none') {
		password.style.display = 'inline';
		toggleBtn.textContent = 'Hide Password';
	} else {
		password.style.display = 'none';
		toggleBtn.textContent = 'Show Password';
	}
}
