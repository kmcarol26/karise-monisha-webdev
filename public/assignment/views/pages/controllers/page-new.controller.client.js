/**
 * Created by Monisha on 2/14/2017.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController",PageNewController)

    function PageNewController($routeParams,$location,PageService) {
        //var vm=this;
        //assigning to vm makes the RHS available on the templates
        var vm=this;
        vm.userId=$routeParams.uid;
        vm.websiteId=$routeParams.wid;
        vm.pageId=$routeParams.pid;

        function init(){

            vm.pages=PageService.findPageByWebsiteId(vm.websiteId);


        }init();
        //event handlers
        vm.createPage=createPage;
        function createPage(page){
            PageService.createPage(vm.websiteId,page);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");

        }


    }


})();
