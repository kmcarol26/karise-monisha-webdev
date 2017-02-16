/**
 * Created by Monisha on 2/14/2017.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController",WebsiteEditController)

    function WebsiteEditController($routeParams,$location,WebsiteService) {
        //var vm=this;
        //assigning to vm makes the RHS available on the templates
        var vm=this;
        vm.userId=$routeParams.uid;
        vm.websiteId=$routeParams.wid;




        function init(){
            var websites=WebsiteService.findWebsitesByUser(vm.userId);
            vm.websites=websites;
            vm.website=WebsiteService.findWebsiteById(vm.websiteId);


        }init();
        //event handlers
        vm.deleteWebsite=deleteWebsite;
        vm.updateWebsite=updateWebsite;
        function deleteWebsite(){
            WebsiteService.deleteWebsite(vm.websiteId);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/"+vm.userId+"/website");

        }
        function updateWebsite(website){
            WebsiteService.updateWebsite(vm.websiteId,website);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/"+vm.userId+"/website");

        }


    }


})();
