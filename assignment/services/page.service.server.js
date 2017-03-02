/**
 * Created by Monisha on 2/24/2017.
 */

module.exports = function(app){
    app.get('/api/website/:websiteId/page',findAllPagesForWebsite);
    app.post('/api/website/:websiteId/page',createPage);
    app.get('/api/page/:pageId',findPageById);
    app.put('/api/page/:pageId',updatePage);
    app.delete('/api/page/:pageId',deletePage);

    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "234", "description": "Lorem1"},
        {"_id": "432", "name": "Post 2", "websiteId": "789", "description": "Lorem2"},
        {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem3"},
        {"_id": "777", "name": "Post 4", "websiteId": "678", "description": "Lorem4"},
        {"_id": "778", "name": "Post 5", "websiteId": "678", "description": "Lorem5"}


    ];

    function deletePage(req,res) {
        var pageId=req.params.pageId;
        for (var u in pages) {
            if (pages[u]._id == pageId) {
                pages.splice(u, 1);
            }
        }
        res.json(pages);
    }

    function findAllPagesForWebsite(req,res) {

        var websiteId=req.params.websiteId;
        var pageList = [];
        for (var u in pages) {
            if (pages[u].websiteId == websiteId) {
                pageList.push(pages[u]);
            }
        }

        res.json(pageList);

    }

    function createPage(req,res) {

        var websiteId=req.params.websiteId;
        var page = req.body;
        console.log("server");
        var id = (new Date()).getTime();
        page.websiteId=websiteId;
        page._id = id.toString(); //dummy id
        pages.push(page);
        res.json(page);


    }



    function findPageById(req,res) {

        var pageId=req.params.pageId;
        for (var u in pages) {
            var page = pages[u]
            if (page._id === pageId) {
                return res.json(page);
            }
        }
        return null;
    }

    function updatePage(req,res) {
        var pageId=req.params.pageId;
        var page=req.body;

        for (var u in pages) {
            if (pages[u]._id == pageId) {
                pages[u].name = page.name;
                pages[u].description = page.description;

            }
        }
        res.json(pages);

    }

}
