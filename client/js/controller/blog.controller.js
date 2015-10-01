//Logic for page actions here. 

//var myBlogApp = angular.module('ngResource',  [$scope, ParseData]);

var myBlogApp = angular.module('myBlogApp.controllers', []);

myBlogApp.controller('blogController', ['$scope', '$location', 'Blog', function ($scope, $location, Blog) {
    $scope.posts = [];
    Blog.getItems().then(function (data) {
        $scope.items = data.data.results
        for (var i = 0; i < data.data.results.length; i++) {
            var post = {
                title: data.data.results[i].title,
                content: data.data.results[i].content,
                author: data.data.results[i].author
                }
            $scope.posts.unshift(post)
        }
    }).catch(function (error) {
        alert('error');

    });
    
    $scope.createPost = function (){
        $location.path('/newpost/');
    }
    
}]);

myBlogApp.controller('newController', ['$scope', '$location', 'Blog', '$ngResource', function ($scope, $location, Blog, $ngResource){
    // $scope.posts = [];
    // Blog.get().then (function(data) {
    //     $scope.items = data.data.results
    //     for (var i = 0; i < data.data.results.length; i++) {
    //         var post = {
    //             title: data.data.results[i].title,
    //             content: data.data.results[i].content,
    //             author: data.data.results[i].author
    //             }
    //         $scope.posts.unshift(post)
    //     }
        
    // }).catch(function (error) {
    //     alert('error');
    // });
    
    // Blog.get('/blogposts/', post)
    //         .success (function(){
    //             $scope.post.unshift(post);
    //         })
    //         .error(function(err){
    //             console.error(err);
    //         });
 
    $scope.submit =function(){
        $location.path('/blogposts/')
    }
    
}]);





//myBlogApp.controller('createController', ['$scope', '$location', function ($scope, $location){
    // $scope.createPost = function (){
    //     $location.path('/newpost/');
    // }
//}]);




// myBlogApp.controller('myController', ['$scope', 'Blog', function($scope, Blog) {
//    Blog.getItems().then(function(data) {
//    $scope.items = data;
// }).catch(function() {
//    alert('error');
       
//    });
// }]);








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