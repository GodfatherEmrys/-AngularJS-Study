//factory, service, provider
angular.module('todoApp').factory('todoService',function($http){
    var factory = {

        _setStorage: function(){
            localStorage.setItem("data", JSON.stringify(factory.data));   
        },

        _getStorage: function(){
            return JSON.parse(localStorage.getItem("data"));
        },

        data: [1,2,3,4],
        
        create: function(newTodo_title){
            var newTodo = {
                title : newTodo_title,
                compeleted : false,
                createdAt : Date.now()
            }
            factory.data.push(newTodo);
            factory._setStorage();
        },

        read: function(){
            return $http({
                method: "GET",
                url: "http://localhost:9000/todolist"
            }).then(function success(response){
                console.log(response.data);
                angular.copy(factory.data, response.data);
                return response.data;
            });
//            return factory.data;
        },

        update: function(){
            factory._setStorage();
        },

        delete: function(index){
            factory.data.splice(index, 1);
            factory._setStorage();
        },


    };
    return factory;
})