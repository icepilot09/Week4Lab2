//Use to instantiate app, connect factory & controllers and configure app.

var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.services']);



myBlogApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: '../views/blogposts.html',
			controller: 'blogController'
		})
		.when('/newpost/',{
			templateUrl: '../views/newpost.html',
			controller: 'newController'
		})
		.otherwise({
			redirectTo:'/'
		});
});

