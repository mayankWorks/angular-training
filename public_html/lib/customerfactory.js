/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 //sub module
        var myappsubmodule = angular.module('com.mayank.test',[]);
        
        myappsubmodule.factory('CustomerFactory',[function(){
       
       return {
         save:function(){
             console.log('save is called');
         } ,
         findAll:function(){
             console.log('findAll is called');
         }
       };
            
        }]); // end of sub module
