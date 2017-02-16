/**
 * Created by Monisha on 2/11/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)

    function WebsiteListController($routeParams, WebsiteService) {

        var userId = $routeParams.uid;
        var websites = WebsiteService.findWebsitesByUser(userId);
        //assigning to vm makes the RHS available on the templates


        var website = WebsiteService.updateWebsite()

        var vm = this;
        vm.userId = userId;
        vm.websites = websites;
        // vm.website=WebsiteService.findWebsiteById()


    }


})();
