/**
 * Created by Monisha on 2/14/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController)

    function PageNewController($routeParams, $location, PageService) {
        //var vm=this;
        //assigning to vm makes the RHS available on the templates
        var vm = this;
        //event handlers
        vm.createPage = createPage;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        function init() {
           // console.log("page new client")

            PageService
                .findAllPagesForWebsite(vm.websiteId)
                .success(function(pages){
                    vm.pages=pages;


                });

        }init();

        function createPage(page) {
           // console.log(page);
            PageService
                .createPage(vm.websiteId, page)
                .success(function(){
                    PageService
                        .findAllPagesForWebsite(vm.websiteId)
                        .success(function(pages){
                            vm.pages=pages;
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

                        });

                });


        }


    }


})();
