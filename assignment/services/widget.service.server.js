/**
 * Created by Monisha on 2/24/2017.
 */
module.exports =  function (app) {
    //var multer = require('multer'); // npm install multer --save
   // var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.post('/api/page/:pageId/widget',createWidget);
    app.get('/api/widget/:widgetId',findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);


    var widgets = [
        {
            "_id": "123",
            "name": "My First Header",
            "widgetType": "HEADER",
            "pageId": "321",
            "size": 2,
            "text": "GIZMODO"
        },
        {
            "_id": "234",
            "name": "My Second Header",
            "widgetType": "HEADER",
            "pageId": "321",
            "size": 4,
            "text": "Lorem ipsum"
        },
        {
            "_id": "345",
            "name": "My First Image",
            "widgetType": "IMAGE",
            "pageId": "321",
            "width": "100%",
            "text": "Lorem ipsum",
            "url": "http://lorempixel.com/400/200/"
        },
        {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        {
            "_id": "567",
            "name": "My Third Header",
            "widgetType": "HEADER",
            "pageId": "321",
            "size": 4,
            "text": "Lorem ipsum"
        },
        {
            "_id": "678", "name": "My First Video", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E", "text": "Lorem ipsum"
        },
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        {
            "_id": "135",
            "name": "My Fourth Header",
            "widgetType": "HEADER",
            "pageId": "777",
            "size": 2,
            "text": "GIZMODO"
        },
        {
            "_id": "136",
            "name": "My First Image",
            "widgetType": "IMAGE",
            "pageId": "777",
            "width": "100%",
            "text": "Lorem ipsum",
            "url": "http://lorempixel.com/400/200/"
        },
        {
            "_id": "137", "name": "My First Video", "widgetType": "YOUTUBE", "pageId": "777", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E", "text": "Lorem ipsum"
        }

    ];

    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });
    app.post ("/api/upload", upload.single('myFile'), uploadImage);


    function uploadImage(req, res) {
        var myFile = req.file;

        console.log(req.body);
        var filename = myFile.filename;
        for (var w in widgets) {
            if (widgets[w]._id == req.body.widgetId) {
                console.log("if");
                widgets[w].url = req.protocol + '://' + req.get('host') + "/uploads/" + filename;
                widgets[w].width=req.body.width;
            }
        }

        console.log(widgets);
        res.redirect("/assignment/#/user/" + req.body.userId + "/website/" + req.body.websiteId + "/page/"
            + req.body.pageId + "/widget");
    }

    function deleteWidget(req,res) {
        console.log("delete");
        var widgetId=req.params.widgetId;
         for (var u in widgets) {
         if (widgets[u]._id == widgetId) {
            widgets.splice(u, 1);
                  }
         }
        res.json(widgets);
    }

    function findWidgetById(req,res) {
         var widgetId=req.params.widgetId;
         for (var u in widgets) {
         var widget = widgets[u];
         if (widget._id == widgetId) {
             return res.json(widget);//returning a copy of the website so that when we edit the website
         // in website-edit , the website name on the left doesnt change
         }
         }

    }

    function createWidget(req,res) {
        var pageId=req.params.pageId;
        var newWidget=req.body;
        newWidget.pageId = pageId;
        widgets.push(newWidget);
        res.json(newWidget);

    }

    function findAllWidgetsForPage(req,res){
        var pageId=req.params.pageId;
        var widgetList = [];
        for (var u in widgets) {
            if (widgets[u].pageId == pageId) {
                widgetList.push(widgets[u]);
                           }
        }
        res.json(widgetList);

    }
    function updateWidget(req, res) {

         var widget=req.body;
         if (widget.widgetType == "HEADER") {
                for (var u in widgets) {
                    if (widgets[u]._id == widget._id) {
                         widgets[u].name =  widget.name;
                         widgets[u].text = widget.text;
                         widgets[u].size = Number(widget.size);
                    }
                }
         }

         else if (widget.widgetType == "IMAGE") {
                for (var u in widgets) {
                    if (widgets[u]._id == widget._id) {
                        widgets[u].name = widget.name;
                        widgets[u].text = widget.text;
                        widgets[u].url = widget.url;
                        widgets[u].width = widget.width;
                    }
                }

         }
         else //widgetType==YouTube

         {
                for (var u in widgets) {
                    if (widgets[u]._id == widget._id) {
                        widgets[u].name = widget.name;
                        widgets[u].text = widget.text;
                        widgets[u].url = widget.url;
                        widgets[u].width = widget.width;
                    }
                }

         }
         res.json(widget);
    }

}
