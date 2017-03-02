/**
 * Created by Monisha on 2/14/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)

    function PageListController($routeParams, PageService) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        function init() {
            console.log("pagelist");

                PageService
                        .findAllPagesForWebsite(vm.websiteId)
                        .success(function(pages){
                            vm.pages=pages;
                            console.log("inside");

                }).error(function () {
                    console.log("error");
                });

        }

        init();
        var website = PageService.updatePage();

    }


})();

