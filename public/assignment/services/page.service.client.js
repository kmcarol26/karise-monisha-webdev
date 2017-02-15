/**
 * Created by Monisha on 2/14/2017.
 */

(function(){
    angular.module("WebAppMaker")
        .service("PageService",pageService); //declates service UserService. userService is the constructor . UserService returns api

    function pageService() {
        var pages=[
            { "_id": "321", "name": "Post 1", "websiteId": "234", "description": "Lorem1" },
            { "_id": "432", "name": "Post 2", "websiteId": "789", "description": "Lorem2" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem3" },
            { "_id": "777", "name": "Post 4", "websiteId": "678", "description": "Lorem4" },
            { "_id": "778", "name": "Post 5", "websiteId": "678", "description": "Lorem5" }



        ]
        this.findPageByWebsiteId= findPageByWebsiteId;
        this.findPageById= findPageById;
        this.createPage= createPage;
        this.deletePage= deletePage;
        this.updatePage= updatePage;
        //api is a json map of the CRUD operations

        var api = {
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "createPage": createPage,
            "deletePage": deletePage,
            "updatePage": updatePage

        };
        return api;

        function createPage(websiteId,page) {
            page.websiteId=websiteId;
            page._id=(new Date()).getTime(); //dummy id
            pages.push(page);
        }

        function deletePage(pageId) {
            for (var u in pages) {
                if (pages[u]._id == pageId) {
                    pages.splice(u,1);
                }
            }}
        function updatePage(pageId,page) {

        for (var u in pages) {

            if (pages[u]._id == pageId) {
                pages[u].name =  page.name;
                pages[u].description =  page.description;

            }
        }



        }




        function findPageByWebsiteId(websiteId) {
            var pageList =[];
            for (var u in pages) {
                if (pages[u].websiteId == websiteId) {
                    pageList.push(pages[u]);
                }
            }
            return pageList;
        }
        function findPageById(pageId) {
            for (var u in pages) {
                var page=pages[u]
                if (page._id === pageId) {
                    return angular.copy(page);//returning a copy of the website so that when we edit the website
                    // in website-edit , the website name on the left doesnt change
                }
            }
            return null;
        }
    }
})();

