angular.module('mainApp',['soccerApp','ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    var signinState = {
        url: '/',
        views: {
            'signin': { templateUrl: 'views/account/signin.html' }
        }
    };
    
    var signupState = {
        url: '/signup',
        views: {
            'signup':{ templateUrl: 'views/account/signup.html' }   
        }
    };
    
    var mainState = {
        url: '/main',
        views: {
            'main': { templateUrl: 'views/mainmenu/index.html' }
        }
    };
    
    var homeState = {
        url: '/home',
        views: {
            'home': { templateUrl: 'views/mainmenu/home.html' }
        }
    };
    
    
    
    $stateProvider.state('signin',signinState);
    $stateProvider.state('signup',signupState);
    $stateProvider.state('main',mainState);
    $stateProvider.state('main.home',homeState);
    $urlRouterProvider.otherwise("/");
});