
angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		

		Todos.image({text: "mario nintendo"}).success(function(data) {
				console.log(data);
				$scope.image1 = data;
		});
		Todos.image({text: "pokemon"}).success(function(data) {
				$scope.image2 = data;
		});
		Todos.image({text: "zelda"}).success(function(data) {
				$scope.image3 = data;
		});
		Todos.image({text: "league of legends"}).success(function(data) {
				$scope.image4 = data;
		});
		Todos.image({text: "engineering"}).success(function(data) {
				$scope.image5 = data;
		});
		Todos.image({text: "mystery"}).success(function(data) {
				$scope.image6 = data;
		});
		Todos.image({text: "books"}).success(function(data) {
				$scope.image7 = data;
		});
		Todos.image({text: "autobiography"}).success(function(data) {
				$scope.image8 = data;
		});
		Todos.image({text: "sushi"}).success(function(data) {
				$scope.image9 = data;
		});
		var images = ["image1","image2","image3","image4","image5","image6","image7","image8","image9"];
		$scope.changeImage = function(image) {
			Todos.image({text: image}).success(function (data) {
				var index = Math.floor((Math.random() * 9));

				$scope[images[index]] = data;
			});
		}

		$scope.randomizeImage = function(image, index) {
			Todos.image({text: image}).success(function (data) {
				$scope[images[index]] = data;
			});
		}

		$scope.searchImage = function() {
			Todos.image($scope.searchData).success(function(data) {
					$scope.image = data;
			});
		}

		// Chrome scope
		$scope.likeImage = function(id) {
			var param = {
				user : "john",
				text : id
			}
			Todos.like(param).success(function (data) {
				
			});
		};

		$scope.dislikeImage	= function(id) {
			Todos.dislike(id).success(function (data) {
				
			})
		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);