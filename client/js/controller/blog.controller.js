//Logic for page actions here. 

// var myBlogApp = angular.module('ngResource',  [$scope, ParseData]);

var myBlogApp = angular.module('myBlogApp.controllers', []);

myBlogApp.controller('myController', ['$scope', 'Blog', function($scope, Blog) {
   Blog.getItems().then(function(data) {
   $scope.items = data;
}).catch(function() {
   alert('error');
       
   });
}]);

// myBlogApp.controller('ParseFactory', [
// 	ParseData.getItems().then(function(data) {
//     $scope.items = data;
// }).catch(function() {
//     alert('error');
// });
// ]);

// var myBlogApp = angular.module('myBlogApp.controllers', []);

// myBlogApp.controller('SampleController', ['$scope', 'Blog', function($scope, Blog){
//    $scope.posts = [];
//    Blog.getItems().then(function(blogPosts) {
//        blogPosts.forEach(function(post) {
//            $scope.posts.unshift(post);
//        });
       // for (var i = 0; i < blogPosts.length; i++ ){
       //     $scope.posts.push(blogPosts[i]);
       // }
//    });
// }]);