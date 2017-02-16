/**
 * Created by Monisha on 2/9/2017.
 */
(function () {

    angular
        .module("WebAppMaker")
        .controller("LoginController", loginController); // Instantiate a Controller called LoginController with constructor loginController

    function loginController($location, UserService) { //injecting UserService
        var vm = this; // vm (viewModel) refers to the current instance. We dont use $scope here so that we know which
        // controller's instance objects are being used in the template
        //$location is used to access n manipulate the URL

        //Event Handlers are all declared here
        vm.login = login;

        //Event Handlers Definitions

        function login(user) {
            var user = UserService.findUserByCredentials(user.username, user.password); //UserService returns a user or null
            if (user) {// if User exists and is not null
                $location.url("/user/" + user._id);     //Go to profile page i.e change the URL using $location.url

            }
            else {
                vm.error = "User not found";
            }
        }


    }


})();
