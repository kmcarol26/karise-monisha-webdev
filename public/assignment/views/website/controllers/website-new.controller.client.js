/**
 * Created by Monisha on 2/14/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController)

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        //var vm=this;
        //assigning to vm makes the RHS available on the templates
        var userId = $routeParams.uid;

        //assigning to vm makes the RHS available on the templates

        var vm = this;
        vm.userId = userId;


        function init() {
            var websites = WebsiteService.findWebsitesByUser(userId);
            vm.websites = websites;


        }

        init();
        //event handlers
        vm.createWebsite = createWebsite;
        function createWebsite(website) {
            WebsiteService.createWebsite(userId, website);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website");


        }


    }


})();
