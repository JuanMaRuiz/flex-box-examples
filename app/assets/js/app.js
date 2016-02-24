(function(){
	'use strict';

	angular.module('flexbox', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('app',{
					url: '/',
					views: {
						'reference': {
							templateUrl: 'views/reference.html'
						},
						'navbar': {
							templateUrl: 'views/navbar.html'
						},
						'content': {
							templateUrl: 'views/home.html',
							controller: 'ctrlOne'
						},
						'footer': {
							templateUrl: 'views/footer.html'
						}
					}
				})
				.state('app.flexibleboxlayout',{
					url: 'flexible-box-layout',
					views: {
						'reference': {
							templateUrl: 'views/reference.html'
						},
						'content@': {
							templateUrl: 'views/flexible-box-layout.html',
							controller: 'demoCtrl'
						}
					}
				});
				$urlRouterProvider.otherwise('/');
	}])

	.controller('demoCtrl', ['$scope', function($scope){
		$scope.msg = "Inside flexibleboxlayout";

	}])
	.controller('ctrlOne', ['$scope', function($scope){
		$scope.msg = "Inside home";
	}])


})();



// (function(){

// 	'use strict';

// 	angular.module('confusionApp', ['ui.router', 'ngResource'])

// 		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
// 			$stateProvider
// 				.state('app',{
// 					url: '/',
// 					views: {
// 						'header': {
// 							templateUrl: 'views/header.html'
// 						},
// 						'content': {
// 							templateUrl: 'views/home.html',
// 							controller: 'IndexController'
// 						},
// 						'footer': {
// 							templateUrl: 'views/footer.html'
// 						}
// 					}
// 				})
// 				.state('app.aboutus', {
// 					url: 'aboutus',
// 					views: {
// 						'content@': {
// 							templateUrl: 'views/aboutus.html',
// 							controller: 'AboutController'
// 						}
// 					}
// 				})
// 				.state('app.contactus',{
// 					url: 'contactus',
// 					views: {
// 						'content@': {
// 							templateUrl: 'views/contactus.html',
// 							controller: 'ContactController'
// 						}
// 					}
// 				})
// 				.state('app.menu', {
// 					url: 'menu',
// 					views: {
// 						'content@': {
// 							templateUrl: 'views/menu.html',
// 							controller: 'MenuController'
// 						}
// 					}
// 				})
// 				.state('app.dishdetails',{
// 					url: 'menu/:id',
// 					views: {
// 						'content@': {
// 							templateUrl: 'views/dishdetail.html',
// 							controller: 'DishDetailController'
// 						}
// 					}
// 				});
// 			$urlRouterProvider.otherwise('/');
// 		}]);

		

// })();