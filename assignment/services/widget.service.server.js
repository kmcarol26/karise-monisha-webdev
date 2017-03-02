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
   // app.post ("/api/upload", upload.single('myFile'), uploadImage);




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

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;
    }

    function deleteWidget(req,res) {
        console.log("delete");
        var widgetId=req.params.widgetId;
         for (var u in widgets) {
         if (widgets[u]._id == widgetId) {
         widgets.splice(u, 1);
         console.log(widgets);
         }
         }

        res.json(widgets);
    }

    function findWidgetById(req,res) {
        console.log("server");
        var widgetId=req.params.widgetId;


         for (var u in widgets) {
         var widget = widgets[u];
         if (widget._id == widgetId) {
             console.log(widget);
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
                //console.log(pages[u]);
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
