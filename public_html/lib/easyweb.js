//Module DI
var myapp = angular.module('myapp',['com.mayank.test','ngRoute']);

//Router and its configuration

myapp.config(['$routeProvider',function($routeProvider){
    //Routing logic
    //uri: /customer pr /customer/list
    $routeProvider.when('/customer',{templateUrl:'customertemplate.html',
    controller : 'CustomerController'});
    
}]);


 myapp.controller('CustomerController',['$scope','CustomerFactory',function($scope,cusFactory){
            $scope.save=function(){
              cusFactory.save();  
            };
            $scope.findAll=function(){
              cusFactory.findAll();  
            };
//            cusFactory.save();
//            cusFactory.findAll();
        }]);



 //sub module
//        var myappsubmodule = angular.module('com.mayank.test',[]);
//        
//        myapp.factory('CustomerFactory',[function(){
//       
//       return {
//         save:function(){
//             console.log('save is called');
//         } ,
//         findAll:function(){
//             console.log('findAll is called');
//         }
//       };
//            
//        }]); // end of sub module