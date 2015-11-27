var user = arguments[0] || {};

populateUserDetails(user);

function populateUserDetails(user) {
	var userDetails = user.toJSON();
	$.name.text = userDetails.name;
	$.username.text = userDetails.username;
	$.email.text = userDetails.email;
	$.phone.text = userDetails.phone;
	$.website.text = userDetails.website;
	$.address.text = userDetails.address.street+' '+userDetails.address.city+' '+userDetails.address.zipcode;
	$.company.text = userDetails.company.name;
}

function updateUser() {
	var params = {
		name: 'Updated User',
		username: 'updateduser',
		email: 'newuser@email.com'
	};

	// UPDATE /users/:id
	user.save(params, {
		success: populateUserDetails,
		error: function(err) {
			alert(err);
		}
	});
}

function deleteUser() {
	// DELETE /users/:id
	user.destroy();
	closeDetails();
}

function closeDetails() {
	$.detailsWindow.close();
}
