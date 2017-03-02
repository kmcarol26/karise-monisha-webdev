/**
 * Created by Monisha on 2/14/2017.
 */

(function () {
    angular.module("WebAppMaker")
        .service("PageService", pageService); //declates service UserService. userService is the constructor . UserService returns api

    function pageService($http) {


        var api = {
            "findAllPagesForWebsite": findAllPagesForWebsite,
            "findPageById": findPageById,
            "createPage": createPage,
            "deletePage": deletePage,
            "updatePage": updatePage

        };return api;

        this.findAllPagesForWebsite = findAllPagesForWebsite;
        this.findPageById = findPageById;
        this.createPage = createPage;
        this.deletePage = deletePage;
        this.updatePage = updatePage;
        //api is a json map of the CRUD operations

        function createPage(websiteId, page) {
            console.log("client");

            return $http.post("/api/website/"+websiteId+"/page",page);

        }

        function deletePage(pageId) {
            return $http.delete("/api/page/"+pageId);

        }

        function updatePage(pageId, page) {
            return $http.put("/api/page/"+pageId,page);

        }


        function findAllPagesForWebsite(websiteId) {

            return $http.get("/api/website/"+websiteId+"/page");

        }

        function findPageById(pageId) {
            return $http.get("/api/page/"+pageId);
        }

            /*
            for (var u in pages) {
                var page = pages[u]
                if (page._id === pageId) {
                    return angular.copy(page);//returning a copy of the website so that when we edit the website
                    // in website-edit , the website name on the left doesnt change
                }
            }
            return null;
        }*/
    }
})();

