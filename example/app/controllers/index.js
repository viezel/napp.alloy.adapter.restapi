var Users = Alloy.Collections.users;

// GET /users
Users.fetch();

function addUser() {
	var newUser = Alloy.createModel('Users');

	var params = {
		name: 'New User',
		username: 'newuser',
		email: 'newuser@email.com'
	};

	// POST /users
	newUser.save(params, {
		success: function(model, response) {
			// jsonplaceholder.typicode.com will not actually create
			// a new user but it will send back a response as if it did.
			alert(response);
		},
		error: function(err) {
			alert(err);
		}
	});
}

function userProfile(e) {
	var item = e.section.getItemAt(e.itemIndex);
	// GET /users/:id
  var user = Users.get(item.user.id);

  Alloy.createController('details', user).getView().open({modal:true});
}

$.index.open();
