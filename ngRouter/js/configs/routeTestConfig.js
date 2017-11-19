angular.module('routeTest')
.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    
    .when('/main',{
        templateUrl: '/views/entryMaker/entryMaker.html'
    })
    
    .otherwise(
        {
            redirectTo: '/'
        }
    );
    
    $locationProvider.html5Mode({enable: true, requireBase: false});
    
});