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
            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .success(function(pages){
                    vm.pages=pages;
                    var page=PageService
                                .findPageById(vm.pageId)
                                .success(function(page){
                                    console.log("page");
                                    vm.page=page;
                                });


                });
        }


        init();

        function deletePage() {
            vm.pages=PageService
                .deletePage(vm.pageId)
                .success(function(){
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                });
            //vm.websites=WebsiteService.findWebsitesByUser(vm.userId);


        }

        function updatePage(page) {
            vm.pages=PageService
                        .updatePage(vm.pageId, page)
                        .success(function () {
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

                        });
                  }


    }


})();

