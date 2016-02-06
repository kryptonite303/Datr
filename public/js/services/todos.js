angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			image : function(search) {
				return $http.post('/api/image', search);
			},
			like : function (id) {
				return $http.post('/api/like', id);
			},
			dislike : function (id) {
				return $http.post('/api/dislike', id);
			}
		}
	}]);