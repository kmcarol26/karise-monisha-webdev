/**
 * Created by Monisha on 2/9/2017.
 */
(function(){
    angular.module("WebAppMaker")
        .service("WebsiteService",websiteService); //declates service UserService. userService is the constructor . UserService returns api

    function websiteService() {
        var websites = [{ "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
        ];
        var api = {
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "createWebsite": createWebsite,
            "deleteWebsite": deleteWebsite,
            "updateWebsite": updateWebsite

        };
        return api;

        this.findWebsitesByUser= findWebsitesByUser;
        this.findWebsiteById= findWebsiteById;
        this.createWebsite= createWebsite;
        this.deleteWebsite= deleteWebsite;
        this.updateWebsite= updateWebsite;



        function createWebsite(userId,website) {
            website.developerId=userId;
            var id=(new Date()).getTime();
            website._id= id.toString();//dummy id

            websites.push(website);
        }

        function deleteWebsite(websiteId) {
            for (var u in websites) {
                if (websites[u]._id == websiteId) {
                    websites.splice(u,1);
                }
        }}
        function updateWebsite(websiteId,website) {
            for (var u in websites) {
                if (websites[u]._id == websiteId) {
                    websites[u].name=website.name;
                    websites[u].description=website.description;
                }
            }}



        function findWebsitesByUser(userId) {
            var sites=[];
            for (var u in websites) {
                if (websites[u].developerId == userId) {
                    sites.push(websites[u]);
                }
            }
            return sites;
        }
        function findWebsiteById(websiteId) {
            for (var u in websites) {
                var website=websites[u]
                if (website._id === websiteId) {
                    return angular.copy(website);//returning a copy of the website so that when we edit the website
                                                // in website-edit , the website name on the left doesnt change
                }
            }
            return null;
        }
    }
})();
