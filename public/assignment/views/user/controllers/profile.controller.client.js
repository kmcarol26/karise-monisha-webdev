/**
 * Created by Monisha on 2/10/2017.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController",profileController);

    function profileController($routeParams,UserService){//$routeParams is a map of all the URL attributes

        //assigning to vm makes the RHS available on the templates
        var vm=this;
        vm.updateUser=updateUser;
        vm.deleteUser=deleteUser;
        var userId=$routeParams['uid'];

        function init() {
            var user = UserService.findUserById(userId);
            vm.user = user;
        }
        init();

        function updateUser(newUser){
            var user=UserService.updateUser(userId,newUser);

            if(user!=null){

                vm.message="User successfully updated!"
            }
            else{
                vm.error="Unable to update user";
            }

        }

        function deleteUser(userId){
            UserService.deleteUser(userId);
            vm.users=UserService.findAllUsers();
            vm.message="User deactivated.";

        }





    }


})();
