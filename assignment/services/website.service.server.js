/**
 * Created by Monisha on 2/24/2017.
 */
module.exports =  function (app){
    app.get('/api/user/:userId/website',findWebsitesByUser);
    app.post('/api/user/:userId/website',createWebsite);
    app.get('/api/website/:websiteId',findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    var websites = [{ "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
    ];

    function deleteWebsite(req,res){
        var websiteId=req.params.websiteId;
        for (var u in websites) {
            if (websites[u]._id == websiteId) {
                websites.splice(u,1);
            }
        }
        res.json(websites);
    }

    function updateWebsite(req,res){
        var website=req.body;
        var websiteId=req.params.websiteId;
        for (var u in websites) {
            if (websites[u]._id == websiteId) {
                websites[u].name=website.name;
                websites[u].description=website.description;
            }
        }
        res.json(websites);


    }
    function findWebsiteById(req,res){
        var websiteId=req.params.websiteId;
       // console.log(websiteId);
        for (var u in websites) {
            var website=websites[u]
            if (website._id === websiteId) {
                return res.json(website);//returning a copy of the website so that when we edit the website
                // in website-edit , the website name on the left doesnt change
            }
        }
        return null;

    }

    function findWebsitesByUser(req,res){
        var userId= req.params.userId;
        var sites=[];
        for (var u in websites) {
            if (websites[u].developerId == userId) {
                sites.push(websites[u]);
            }
        }
        res.json(sites);
    }
    function createWebsite(req,res) {

         var userId= req.params.userId;
         var website = req.body;
         website.developerId=userId;
         var id=(new Date()).getTime();
         website._id= id.toString();//dummy id
         websites.push(website);
         res.json(website);
    }


};
