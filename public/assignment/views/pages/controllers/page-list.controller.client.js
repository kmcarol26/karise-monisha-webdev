/**
 * Created by Monisha on 2/14/2017.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController",PageListController)

    function PageListController($routeParams,PageService) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        function init() {


        vm.pages = PageService.findPageByWebsiteId(vm.websiteId);

    }init();
        //assigning to vm makes the RHS available on the templates




    }


})();

