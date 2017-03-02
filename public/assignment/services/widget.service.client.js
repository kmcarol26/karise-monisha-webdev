/**
 * Created by Monisha on 2/14/2017.
 */
/**
 * Created by Monisha on 2/9/2017.
 */
(function () {
    angular.module("WebAppMaker")
            .service("WidgetService", widgetService); //declates service UserService. userService is the constructor . UserService returns api

    function widgetService($http) {



        var api = {
            "findAllWidgetsForPage": findAllWidgetsForPage,
            "findWidgetById": findWidgetById,
            "deleteWidget": deleteWidget,
            "updateWidget": updateWidget,
            "createWidget": createWidget

        };
        return api;

        this.findAllWidgetsForPage = findAllWidgetsForPage;
        this.findWidgetById = findWidgetById;
        this.createWidget = createWidget;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function createWidget(widget,pageId) {

            return $http.post("/api/page/"+pageId+"/widget",widget);

        }


        function deleteWidget(widgetId) {

            return $http.delete("/api/widget/"+widgetId);

        }


        function findAllWidgetsForPage(pageId) {

            return $http.get("/api/page/"+pageId+"/widget");


        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/"+widgetId);
        }

        function updateWidget(widgetId, widget) {
             return $http.put("/api/widget/"+widgetId,widget);

        }
    }
})();

