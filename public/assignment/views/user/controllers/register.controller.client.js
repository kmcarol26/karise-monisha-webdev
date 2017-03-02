/**
 * Created by Monisha on 2/15/2017.
 */
/**
 * Created by Monisha on 2/10/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", registerController);

    function registerController($routeParams, $location, UserService) {//$routeParams is a map of all the URL attributes

        //assigning to vm makes the RHS available on the templates
        var vm = this;
        vm.register = register;

        function createUser(newUser) {
            console.log("createUser");
            UserService
                        .createUser(newUser)
                        .success(function(user){
                            console.log("createUser");
                            var userId=user._id;

                        }).error(function(){console.log("error");});

        }

        function register(user) {
            //noinspection JSUnresolvedFunction
            UserService
                .findUserByUsername(user.username)
                .success(function(user){
                    vm.message= " Username already taken";
                })
                .error(function(){
                    UserService
                        .createUser(user)
                        .success(function (user){
                            console.log(user);
                            var userId=user._id;
                            $location.url("/user/" +userId);
                           // $location.url('/profile/' +user._id);

                        })
                        .error(function(){
                            vm.error = "Sorry ! Could not Register";
                        });

            });
        }

    }

})();

