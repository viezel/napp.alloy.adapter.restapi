exports.definition = {
	config: {
		URL: "http://jsonplaceholder.typicode.com/users",
		adapter: {
			type: "restapi",
			collection_name: "users",
			idAttribute: "id"
		}
	},      
	extendModel: function(Model) {      
		_.extend(Model.prototype, {});
		return Model;
	},
	extendCollection: function(Collection) {        
		_.extend(Collection.prototype, {});
		return Collection;
	}       
}