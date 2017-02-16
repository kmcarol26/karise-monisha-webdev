/**
 * Created by Monisha on 2/14/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController)

    function PageEditController($routeParams, $location, PageService) {
        var vm = this;
        //event handlers
        vm.deletePage = deletePage;
        vm.updatePage = updatePage;


        //assigning to vm makes the RHS available on the templates
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;


        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);

            vm.page = PageService.findPageById(vm.pageId);


        }

        init();

        function deletePage() {
            PageService.deletePage(vm.pageId);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

        }

        function updatePage(page) {
            PageService.updatePage(vm.pageId, page);
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");


        }


    }


})();

