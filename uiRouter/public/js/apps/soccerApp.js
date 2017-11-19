angular.module('soccerApp', ['ui.router']);

angular.module('soccerApp')
.config(function($stateProvider, $urlRouterProvider){

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'views/testFolder/home.html'
        
    };
    
    var entryState = {
        name: 'entry',
        url: '/entry',
        templateUrl: 'views/testFolder/entry.html'
    };
    
    var teamadminState = {
        name: 'teamadmin',
        url: '/teamadmin',
        templateUrl: 'views/testFolder/teamadmin.html'
    }
    
    $urlRouterProvider.otherwise('/');
    $stateProvider.state(homeState);
    $stateProvider.state(entryState);
    $stateProvider.state(teamadminState);
    
});