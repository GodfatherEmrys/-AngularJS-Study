angular.module('soccerApp', ['ui.router']);

angular.module('soccerApp')
.config(function($stateProvider, $urlRouterProvider){

    var entryState = {
        url: '/entry',
        views: {
            'entry' : { templateUrl: 'views/mainmenu/entry.html' }    
        }
    };
    
    var teamadminState = {
        name: 'teamadmin',
        url: '/teamadmin',
        templateUrl: 'views/mainmenu/teamadmin.html'
    }
    
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('entry',entryState);
    $stateProvider.state('teamadmin',teamadminState);
    
});