angular.module('mainApp',['ui.router'])
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
    
    var entryState = {
        url: '/entry',
        views: {
            'entry' : { templateUrl: 'views/mainmenu/entry.html' }    
        }
    };
    
    var teamadminState = {
        url: '/teamadmin',
        views: {
            'teamadmin' : { templateUrl: 'views/mainmenu/teamadmin.html' }    
        }
        
    }
    
    $stateProvider.state('signin',signinState);
    $stateProvider.state('signup',signupState);
    $stateProvider.state('main',mainState);
    $stateProvider.state('main.home',homeState);
    $stateProvider.state('main.entry',entryState);
    $stateProvider.state('main.teamadmin',teamadminState);
    
    $urlRouterProvider.otherwise("/");
});