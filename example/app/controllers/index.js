var Users = Alloy.Collections.users;

Users.fetch();

function addUser() {
	var newUser = Alloy.createModel('Users');

	var params = {
		name: 'New User',
		username: 'newuser',
		email: 'newuser@email.com'
	};

	newUser.save(params, {
		success: function(model, response) {
			alert(response);
		},
		error: function(err) {
			alert(err);
		}
	});
}

function userProfile(e) {
	var item = e.section.getItemAt(e.itemIndex);
  var user = Users.get(item.user.id);

  Alloy.createController('details', user.toJSON()).getView().open({modal:true});
}

$.index.open();
