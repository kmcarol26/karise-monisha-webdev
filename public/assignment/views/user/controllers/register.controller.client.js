/**
 * Created by Monisha on 2/15/2017.
 */
/**
 * Created by Monisha on 2/10/2017.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController",registerController);

    function registerController($routeParams,$location,UserService){//$routeParams is a map of all the URL attributes

        //assigning to vm makes the RHS available on the templates
        var vm=this;
        vm.createUser=createUser;

        function createUser(newUser){
            var userId=UserService.createUser(newUser);
            $location.url("/user/"+userId);


        }







    }


})();

