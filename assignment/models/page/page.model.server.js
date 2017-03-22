/**
 * Created by Monisha on 3/17/2017.
 */
module.exports = function(){
    var model = {};
    var mongoose = require("mongoose");
    var pageSchema = require("./page.schema.server.js")();
    var pageModel = mongoose.model("pageModel",pageSchema);

    var api = {
        "findAllPagesForWebsite": findAllPagesForWebsite,
        "findPageById": findPageById,
        "createPage": createPage,
        "deletePage": deletePage,
        "updatePage": updatePage,
        "setModel": setModel
    };return api;

    function setModel(_model) {
        model=_model;
    }

    function deletePage(pageId) {
        return  pageModel.remove({_id : pageId});
        }

    function findAllPagesForWebsite(websiteId) {
        return pageModel.find({"_website":websiteId},
            function(err, result){
                if(err){
                }
                if(result){
                    return result;
                }
                else{
                    return err;}
            });

    }

    function createPage(websiteId,page) {
        page._website=websiteId;
        return pageModel.create(page);

    }



    function findPageById(pageId) {
        return pageModel.findById(pageId);

    }

    function updatePage(pageId,page) {
        return pageModel.update(
            {
                _id : pageId
            },
            {
                name : page.name,
                description : page.description

            }
        )

    }


}
