/**
 * Created by Monisha on 2/14/2017.
 */
/**
 * Created by Monisha on 2/9/2017.
 */
(function(){
    angular.module("WebAppMaker")
        .service("WidgetService",widgetService); //declates service UserService. userService is the constructor . UserService returns api

    function widgetService() {
        var widgets = [
            { "_id": "123","name":"My First Header", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234","name":"My Second Header", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345","name":"My First Image",  "widgetType": "IMAGE", "pageId": "321", "width": "100%","text": "Lorem ipsum",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "name":"My Third Header","widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678","name":"My First Video", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E","text": "Lorem ipsum" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "135","name":"My Fourth Header", "widgetType": "HEADER", "pageId": "777", "size": 2, "text": "GIZMODO"},
            { "_id": "136","name":"My First Image",  "widgetType": "IMAGE", "pageId": "777", "width": "100%","text": "Lorem ipsum",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "137","name":"My First Video", "widgetType": "YOUTUBE", "pageId": "777", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E","text": "Lorem ipsum" }

        ];

        this.findWidgetsByPageId= findWidgetsByPageId;
       this.findWidgetById= findWidgetById;
       this.createWidget= createWidget;
        //this.deleteWidget= deleteWidget;
        this.updateWidget= updateWidget;
        this.deleteWidget= deleteWidget;
        this.setHeaderWidgetType=setHeaderWidgetType;
        this.setHeaderWidgetType=setHeaderWidgetType;
        this.setImageWidgetType=setImageWidgetType;
        this.setYouTubeWidgetType=setYouTubeWidgetType;
        //api is a json map of the CRUD operations
        var api = {
            "findWidgetsByPageId": findWidgetsByPageId,
           "findWidgetById": findWidgetById,

          "deleteWidget": deleteWidget,
            "updateWidget": updateWidget,
            "setHeaderWidgetType":setHeaderWidgetType,
            "setImageWidgetType":setImageWidgetType,
            "setYouTubeWidgetType":setYouTubeWidgetType,
            "createWidget": createWidget

        };
        return api;

        function setImageWidgetType() {
           var newImage={ "_id": "345","name":"New Image",  "widgetType": "IMAGE", "pageId": "321", "width": "100%","text": "Enter text here",
               "url": "Enter URL"};
           var id=(new Date()).getTime();
           newImage._id=id.toString();

           return newImage;

        }

        function setHeaderWidgetType() {
            var newHeader={ "_id": "123","name":" New Header", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "Enter Text here"};
            newHeader._id=(new Date()).getTime();

            return newHeader;

        }

        function setYouTubeWidgetType() {
            var newYouTubeWidget={"_id": "137","name":"New Video", "widgetType": "YOUTUBE", "pageId": "117", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E","text": "" };
                newYouTubeWidget._id=(new Date()).getTime();

            return newYouTubeWidget;

        }



        function createWidget(pageId,widget) {
            widget.pageId=pageId;

            widgets.push(widget);
            //return widget;
        }


        function deleteWidget(widgetId) {
            for (var u in widgets) {
                if (widgets[u]._id == widgetId) {
                    widgets.splice(u,1);
                }
            }}





        function findWidgetsByPageId(pageId) {

            var widgetList=[];
            for (var u in widgets) {
                if (widgets[u].pageId == pageId) {
                    widgetList.push(widgets[u]);
                }
            }
            return widgetList;
           // return widgets;

        }
        function findWidgetById(widgetId) {
            for (var u in widgets) {
                var widget=widgets[u];
                if (widget._id == widgetId) {
                    return angular.copy(widget);//returning a copy of the website so that when we edit the website
                    // in website-edit , the website name on the left doesnt change
                }
            }

        }

        function updateWidget(widgetId,widget){

            if(widget.widgetType == "HEADER"){
                for (var u in widgets) {
                    if (widgets[u]._id == widgetId) {
                        widgets[u].name=widget.name;
                        widgets[u].text=widget.text;
                        widgets[u].size=widget.size;
                    }
                }
            }
            else if(widget.widgetType == "IMAGE"){
                for (var u in widgets) {
                    if (widgets[u]._id == widgetId) {
                        widgets[u].name=widget.name;
                        widgets[u].text=widget.text;
                        widgets[u].url=widget.url;
                        widgets[u].width=widget.width;
                    }
                }

            }
            else //widgetType==YouTube

                {
                    for (var u in widgets) {
                        if (widgets[u]._id == widgetId) {
                            widgets[u].name=widget.name;
                            widgets[u].text=widget.text;
                            widgets[u].url=widget.url;
                            widgets[u].width=widget.width;
                        }
                    }


            }



        }
    }
})();

