

App = Ember.Application.create();

App.Router.map(function() {
  this.route("phone", { path: "/phone/:phone_id" });
  //this.route("edit", { path: "/edit/:phone_id" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return phones;
  }
});


var phones = [{
		id: 0,
		name: "W902",
		display: 1,
		model_name: "Sony Ericcson W902",
		pic: "img/phone/W902.jpg",

	} , {	
		id: 1,
		name: "Xperia Ray",
		display: 1,
		model_name: "Sony Ericcson Xperia Ray",
		pic: "img/phone/xperia Ray.jpg",
	} , {
		id: 2,
		name: "Test",
		display: 0,
		model_name: "Test model",
		pic: "",
	}];